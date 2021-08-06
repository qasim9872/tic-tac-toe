import tw from 'twin.macro'
import React from 'react'
import { Square } from '../../atoms/shapes/square/square.component'

const GridContainer = tw.div`flex flex-col border-2 border-black`
const GridRowContainer = tw.div`flex flex-row border-2 border-black`

export const GridRow = ({ y, onClick, size = 3, Shape = Square }) => {
  return (
    <GridRowContainer>
      {Array(size)
        .fill(true)
        .map((key, x) => (
          <Shape key={`${key}-${x}`} onClick={onClick} value={{ x, y }} />
        ))}
    </GridRowContainer>
  )
}

export const Grid = ({ size = 3, Shape = Square }) => {
  const onClick = ({ x, y }) => {
    console.log(`you pressed ${x},${y}`)
  }

  return (
    <GridContainer>
      {Array(size)
        .fill(true)
        .map((key, y) => (
          <GridRow
            y={y}
            size={size}
            Shape={Shape}
            onClick={onClick}
            key={`${key}-${y}`}
          />
        ))}
    </GridContainer>
  )
}
