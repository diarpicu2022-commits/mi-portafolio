"""Instancias estáticas de Archivo e IBM Plex Mono para la imagen social (Satori) y el CV (react-pdf).

Ninguno de los dos admite fuentes variables ni WOFF2. Se parte de los subconjuntos latinos que next/font
descarga de Google Fonts al compilar (.next/static/media) y se guardan en assets/fuentes como TTF.
Licencia de ambas familias: SIL Open Font License 1.1.
Uso: npm run build && python scripts/fuentes-estaticas.py
"""
import glob
import pathlib

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

MEDIA = pathlib.Path(".next/static/media")
SALIDA = pathlib.Path("assets/fuentes")
SALIDA.mkdir(parents=True, exist_ok=True)


def latino(nombre, variable):
    """El archivo de esa familia que cubre la ñ, es decir, el subconjunto latino."""
    for f in sorted(glob.glob(str(MEDIA / "*.woff2"))):
        t = TTFont(f)
        if t["name"].getDebugName(1).startswith(nombre) and ("fvar" in t) == variable and 0xF1 in t.getBestCmap():
            if variable or nombre in t["name"].getDebugName(4):
                return f
    raise SystemExit(f"No encontré {nombre}")


archivo = latino("Archivo", True)
for destino, ejes in [
    ("Archivo-Condensada-Black.ttf", {"wdth": 62, "wght": 900}),
    ("Archivo-Regular.ttf", {"wdth": 100, "wght": 400}),
    ("Archivo-SemiBold.ttf", {"wdth": 100, "wght": 600}),
]:
    f = TTFont(archivo)
    estatica = instantiateVariableFont(f, ejes)
    estatica.flavor = None
    estatica.save(SALIDA / destino)

for peso, destino in [("IBM Plex Mono Regular", "IBMPlexMono-Regular.ttf"), ("IBM Plex Mono Medium", "IBMPlexMono-Medium.ttf")]:
    for f in sorted(glob.glob(str(MEDIA / "*.woff2"))):
        t = TTFont(f)
        if t["name"].getDebugName(4) == peso and 0xF1 in t.getBestCmap():
            t.flavor = None
            t.save(SALIDA / destino)
            break
    else:
        raise SystemExit(f"No encontré {peso}")

for f in sorted(SALIDA.glob("*.ttf")):
    print(f.name, f.stat().st_size)
