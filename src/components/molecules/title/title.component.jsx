import tw from 'twin.macro'
import React from 'react'
import { useGlobalConstantsHook } from '../../../constants/app.constants'
import { icons } from '../../atoms/icons/icons'

const AppTitleContainer = tw.a`flex font-rubik font-medium items-center md:justify-start justify-center text-gray-900`
const AppTitleText = tw.span`ml-3 text-xl`

export const AppTitle = () => {
  const [{ app }] = useGlobalConstantsHook()

  const Icon = icons[app.icon]

  return (
    <AppTitleContainer href={app.href}>
      <Icon />
      <AppTitleText>{app.name}</AppTitleText>
    </AppTitleContainer>
  )
}
