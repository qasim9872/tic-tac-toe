import React from 'react'
import tw from 'twin.macro'

export const Hero = ({ text = 'hero', color = tw`bg-red-100` }) => (
  <div
    tw="flex flex-col justify-center items-center min-h-screen"
    css={[color]}
  >
    {text}
  </div>
)
