import tw from 'twin.macro'
import React from 'react'

import { useGlobalConstantsHook } from '../../../constants/app.constants'
import { SocialIcon } from '../../atoms/icons/social/social-icon'

const SocialLinkContainer = tw.span`inline-flex space-x-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start`

export const Social = () => {
  const [{ socials }] = useGlobalConstantsHook()

  return (
    <SocialLinkContainer>
      {socials.map(social => (
        <SocialIcon key={social.href} {...social} />
      ))}
    </SocialLinkContainer>
  )
}
