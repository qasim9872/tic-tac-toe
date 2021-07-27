import React from 'react'
import tw from 'twin.macro'

export const Logo = ({ spin }) => (
  <img
    tw="h-8 w-8 mr-2"
    css={spin && tw`animate-spin`}
    src="https://drive.google.com/uc?id=1V-B6GzMF3PEUBXeDxJOwONfgNztKP_6P"
    alt="logo"
  />
)
