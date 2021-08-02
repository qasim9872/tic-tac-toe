import 'twin.macro'
import React from 'react'

export const Container = ({ children, override }) => (
  <div tw="flex flex-grow justify-center items-center" css={override}>
    {children}
  </div>
)
