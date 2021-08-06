import tw from 'twin.macro'
import React from 'react'

const SquareContainer = tw.div`flex w-36 h-36 items-center justify-center border-2 border-black`

export const Square = ({ content = 'Square', value, onClick }) => {
  return (
    <SquareContainer onClick={() => onClick(value)}>{content}</SquareContainer>
  )
}
