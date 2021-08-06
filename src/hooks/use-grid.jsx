import { useEffect, useState } from 'react'

import { initializeGrid } from '../utils/helper'

export const useGrid = () => {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    setGrid(initializeGrid(3))
  }, [])

  const mark = (x, y, newContent) => {
    setGrid(previousGrid =>
      previousGrid.map((rows, currentY) =>
        rows.map((content, currentX) =>
          currentX === x && currentY === y ? newContent : content,
        ),
      ),
    )
  }

  const isFilled = (x, y) => !!grid[y][x]

  const getMark = (x, y) => grid[y][x]

  return { grid, mark, getMark, isFilled }
}
