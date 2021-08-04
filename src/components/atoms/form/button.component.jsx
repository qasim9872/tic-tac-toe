import React from 'react'
import tw from 'twin.macro'

export const Button = ({ children, isLoading, onClick, override }) => {
  return (
    <div tw="px-2 flex flex-grow items-end justify-center">
      <button
        onClick={onClick}
        css={[
          isLoading ? tw` bg-gray-400` : tw`bg-indigo-500 hover:bg-indigo-600 `,
          override,
        ]}
        disabled={isLoading}
        tw="flex mx-auto text-white border-0 py-1 px-8 focus:outline-none rounded text-lg"
      >
        {children}
      </button>
    </div>
  )
}
