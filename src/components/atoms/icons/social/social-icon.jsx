import tw from 'twin.macro'
import React from 'react'

import { icons } from '../icons'

export const SocialIcon = ({ icon, href }) => {
  const Icon = tw(icons[icon])`w-5 h-5 text-gray-500`

  return (
    <a href={href}>
      <Icon />
    </a>
  )
}
