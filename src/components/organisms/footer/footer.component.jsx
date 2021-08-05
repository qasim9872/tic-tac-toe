import 'twin.macro'
import React from 'react'
import { ArchiveIcon } from '@heroicons/react/solid'
import { Social } from '../../molecules/social/social.component'

export const Footer = () => {
  return (
    <footer tw="text-gray-600 font-poppins">
      <div tw="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="https://qasim9872.github.io/tic-tac-toe"
          tw="flex font-rubik font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <ArchiveIcon tw="w-8 h-8" />
          <span tw="ml-3 text-xl">Notice Period Calculator</span>
        </a>

        <p tw="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021
          <a
            href="https://github.com/qasim9872"
            tw="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            - Muhammad Qasim
          </a>
        </p>

        <Social />
      </div>
    </footer>
  )
}
