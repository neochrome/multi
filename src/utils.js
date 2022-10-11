export function rnd(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function range(from, to) {
  return Array.from({length: to - from + 1}, (_,i) => from + i);
}
