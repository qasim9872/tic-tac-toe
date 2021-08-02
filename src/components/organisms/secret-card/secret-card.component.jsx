import 'twin.macro'
import React from 'react'

export const SecretCard = ({ secret }) => {
  const { author, text, imgSrc } = secret

  return (
    <div tw="flex bg-white shadow-lg rounded-lg mx-4 w-full max-w-md md:mx-auto md:max-w-2xl ">
      <div tw="flex flex-grow items-start px-4 py-6">
        <img
          tw="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={imgSrc}
          alt="avatar"
        />

        <div tw="w-full">
          <div tw="flex items-center justify-between">
            <h2 tw="text-lg font-semibold text-gray-900 -mt-1">{author}</h2>
            <small tw="text-sm text-gray-700">22h ago</small>
          </div>

          <p tw="mt-3 text-gray-700 text-sm">{text}</p>
        </div>
      </div>
    </div>
  )
}
