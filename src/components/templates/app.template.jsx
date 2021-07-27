import React from 'react'
import tw from 'twin.macro'

import { Header } from '../organisms/header.organism'

const AppContainer = tw.div`flex min-h-screen min-w-full bg-blue-100 justify-center`
const AppTemplateWrapper = tw.div`container flex flex-col`
const AppContent = tw.div`space-y-6`

export const AppTemplate = ({ children }) => (
  <AppContainer>
    <AppTemplateWrapper>
      <Header />

      <AppContent>{children}</AppContent>
    </AppTemplateWrapper>
  </AppContainer>
)
