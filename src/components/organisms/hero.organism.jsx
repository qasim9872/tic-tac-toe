import React, { useContext } from 'react'
import tw from 'twin.macro'

import { UseStickyContext } from '../../store/use-sticky.store'

export const Hero = ({ text = 'hero', color = tw`bg-red-100` }) => {
  const { element } = useContext(UseStickyContext)

  return (
    <div
      ref={element}
      css={[color]}
      tw="flex flex-col justify-center items-center min-h-screen"
    >
      {text}
    </div>
  )
}
