import 'twin.macro'
import React from 'react'

import { icons } from '../icons'

export const SocialIcon = ({ icon, href }) => {
  const Icon = icons[icon]

  return (
    <a href={href}>
      <Icon />
    </a>
  )
}
