import tw from 'twin.macro'
import React from 'react'
import { Square } from '../../atoms/shapes/square/square.component'

const GridContainer = tw.div`flex flex-col border-2 border-black`
const GridRowContainer = tw.div`flex flex-row border-2 border-black`

export const GridRow = ({ y, onClick, row, Shape = Square }) => {
  return (
    <GridRowContainer>
      {row.map((content, x) => (
        <Shape
          key={`x-${x}-${content}`}
          content={content}
          onClick={onClick}
          value={{ x, y }}
        />
      ))}
    </GridRowContainer>
  )
}

export const Grid = ({ grid, onClick, Shape = Square }) => {
  return (
    <GridContainer>
      {grid.map((row, y) => (
        <GridRow
          y={y}
          row={row}
          Shape={Shape}
          onClick={onClick}
          key={`y-${y}`}
        />
      ))}
    </GridContainer>
  )
}
