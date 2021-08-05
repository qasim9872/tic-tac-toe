import tw from 'twin.macro'
import React from 'react'
import { useGlobalConstantsHook } from '../../../constants/app.constants'

const BannerContainer = tw.div`flex justify-center items-center flex-col p-8`
const BannerText = tw.h1`prose font-bold text-4xl font-rubik`

export const Banner = () => {
  const [
    {
      app: { tagline },
    },
  ] = useGlobalConstantsHook()

  return (
    <BannerContainer>
      <BannerText>{tagline}</BannerText>
    </BannerContainer>
  )
}
