export default (min = 1, max = 100000000) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}