import tw from 'twin.macro'
import React from 'react'
import { Social } from '../../molecules/social/social.component'
import { AppTitle } from '../../molecules/title/title.component'
import { Copyright } from '../../molecules/copyright/copyright.component'

const FooterContainer = tw.footer`text-gray-600 font-poppins items-center`
const FooterContent = tw.div`container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col`

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <AppTitle />
        <Copyright />
        <Social />
      </FooterContent>
    </FooterContainer>
  )
}
