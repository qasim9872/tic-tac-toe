import React from 'react'
import 'twin.macro'

export const Button = ({ children, onClick, override }) => {
  return (
    <div tw="px-2 flex flex-grow items-end justify-center">
      <button
        onClick={onClick}
        css={override}
        tw="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {children}
      </button>
    </div>
  )
}
