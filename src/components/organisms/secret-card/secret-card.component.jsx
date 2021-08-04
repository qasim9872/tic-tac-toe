import 'twin.macro'
import React from 'react'
import { format } from 'date-fns'

export const SecretCard = ({ secret }) => {
  const { text, createdOn } = secret
  const author = secret.author || 'Anonymous'

  return (
    <div tw="flex bg-white shadow-lg rounded-lg mx-4 w-full max-w-md md:mx-auto md:max-w-2xl ">
      <div tw="flex flex-grow items-start px-4 py-6">
        <img
          tw="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src={`https://robohash.org/${author}?set=set2&size=180x180`}
          alt="avatar"
        />

        <div tw="w-full">
          <div tw="flex items-center justify-between">
            <h2 tw="text-lg font-semibold text-gray-900 -mt-1">{author}</h2>
            <small tw="text-sm text-gray-700">
              {format(new Date(createdOn), 'h:m aa - d MMM yy')}
            </small>
          </div>

          <p tw="mt-3 text-gray-700 text-sm">{text}</p>
        </div>
      </div>
    </div>
  )
}
