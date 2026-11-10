# Uso: python scripts/recortar-ilustraciones.py "<hoja de Diego>.png" public/projects/ilustraciones
"""Recorta las seis ilustraciones de la hoja de Diego.

1. Quita la decoración de las esquinas (triángulos rojos y diagonales): componentes que tocan el borde,
   y del componente que une la cuadrícula de la torre con la diagonal, la parte a la derecha de la cuadrícula.
2. Asigna cada componente de tinta a su dibujo por la celda de su centro y borra en cada recorte lo ajeno.
3. Lleva el crema de la hoja al papel del sitio con un ajuste lineal por canal (sin parches ni halos).
4. Recorta todas con la misma caja, centrada en su dibujo, sin ampliar.
"""
import sys, pathlib
import numpy as np
from PIL import Image
from scipy import ndimage

hoja, salida = sys.argv[1], pathlib.Path(sys.argv[2])
salida.mkdir(parents=True, exist_ok=True)
im = np.asarray(Image.open(hoja).convert("RGB")).astype(float)
H, W, _ = im.shape
FONDO = np.array([244.0, 236.0, 222.0])
PAPEL = np.array([241.0, 236.0, 226.0])

dist = np.abs(im - FONDO).max(axis=2)
tinta = dist > 40
lab, n = ndimage.label(tinta, structure=np.ones((3, 3)))
borde = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}

decoracion = np.zeros_like(tinta)
for i in borde:
    comp = lab == i
    ys, xs = np.nonzero(comp)
    if xs.max() - xs.min() > 600:  # la cuadrícula de la torre unida a la diagonal: solo se borra lo que pasa de x 1452
        decoracion |= comp & (np.arange(W)[None, :] > 1452)
    else:
        decoracion |= comp

# Celda de cada componente según su centro.
centros = ndimage.center_of_mass(tinta, lab, range(1, n + 1))
def celda(cy, cx):
    return int(min(2, cy // (H / 3))) * 2 + int(cx >= W / 2)
dueno = np.zeros(n + 1, dtype=int) - 1
for i, (cy, cx) in enumerate(centros, start=1):
    if i in borde:
        dueno[i] = celda(cy, cx) if (lab == i).sum() and (np.nonzero(lab == i)[1].max() - np.nonzero(lab == i)[1].min() > 600) else -1
    else:
        dueno[i] = celda(cy, cx)

# Ajuste del crema al papel: canal a canal, el negro queda en su sitio.
ajustada = np.clip(im * (PAPEL / FONDO), 0, 255)

NOMBRES = ["agropulse", "hidromon", "harmonia", "proxy-ia", "ecovolt", "tower-defense"]
CW, CH = 740, 330
for k, nombre in enumerate(NOMBRES):
    propio = np.isin(lab, np.nonzero(dueno == k)[0]) & ~decoracion
    ys, xs = np.nonzero(propio)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    bx0 = int(round(cx - CW / 2)); by0 = int(round(cy - CH / 2))
    bx0 = max(0, min(W - CW, bx0)); by0 = max(0, min(H - CH, by0))
    # Lo ajeno dentro de la caja (otro dibujo o decoración) se pinta de papel, con un margen de 3 px para el antialias.
    ajeno = (tinta & ~propio) | decoracion
    ajeno = ndimage.binary_dilation(ajeno, iterations=3) & ~ndimage.binary_dilation(propio, iterations=1)
    img = ajustada.copy()
    img[ajeno] = PAPEL
    corte = img[by0:by0 + CH, bx0:bx0 + CW]
    Image.fromarray(corte.astype(np.uint8)).save(salida / f"{nombre}.webp", "WEBP", quality=90, method=6)
    aire = (x0 - bx0, bx0 + CW - 1 - x1, y0 - by0, by0 + CH - 1 - y1)
    print(f"{nombre}: dibujo {x1 - x0 + 1}x{y1 - y0 + 1}, caja ({bx0},{by0}) {CW}x{CH}, aire izq/der/arr/abj {aire}, píxeles borrados {int(ajeno[by0:by0+CH, bx0:bx0+CW].sum())}")
