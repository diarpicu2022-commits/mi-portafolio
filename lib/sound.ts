/** Tiny 8-bit sound effects synthesized with the Web Audio API (no audio files). */
let context: AudioContext | null = null;

function audio() {
  if (typeof window === "undefined" || !("AudioContext" in window)) return null;
  context ??= new AudioContext();
  return context;
}

function tone(frequency: number, start: number, duration: number, volume: number) {
  const ctx = audio();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, ctx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(ctx.currentTime + start);
  oscillator.stop(ctx.currentTime + start + duration);
}

export const sounds = {
  step: () => tone(180, 0, 0.05, 0.02),
  bump: () => tone(90, 0, 0.08, 0.04),
  open: () => {
    tone(523, 0, 0.08, 0.05);
    tone(784, 0.08, 0.12, 0.05);
  },
  achievement: () => [523, 659, 784, 1047].forEach((note, index) => tone(note, index * 0.1, 0.14, 0.05)),
};
