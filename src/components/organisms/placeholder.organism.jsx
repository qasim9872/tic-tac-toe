import React from 'react'
import tw from 'twin.macro'

export const PlaceHolder = ({
  text = 'PlaceHolder',
  color = tw`bg-red-100`,
}) => {
  return (
    <div
      css={[color]}
      tw="flex flex-col justify-center items-center min-h-screen"
    >
      {text}
    </div>
  )
}
