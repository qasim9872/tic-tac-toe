export const initializeGrid = (size = 3) => {
  return Array(size)
    .fill(true)
    .map(y => Array(size).fill(0))
}
