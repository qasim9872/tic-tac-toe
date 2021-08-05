import tw from 'twin.macro'
import React from 'react'
import { useGlobalConstantsHook } from '../../../constants/app.constants'

const CopyrightContainer = tw.p`text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`
const CopyrightLink = tw.a`text-gray-600 ml-1`

export const Copyright = () => {
  const [{ author }] = useGlobalConstantsHook()

  return (
    <CopyrightContainer>
      © {new Date().getFullYear()}{' '}
      <CopyrightLink
        href={author.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        - {author.name}
      </CopyrightLink>
    </CopyrightContainer>
  )
}
