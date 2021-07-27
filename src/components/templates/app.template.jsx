import React from 'react'
import tw from 'twin.macro'

import { Header } from '../organisms/header.organism'

const AppTemplateWrapper = tw.div`flex flex-col`
const AppContent = tw.div``

export const AppTemplate = ({ children }) => (
  <AppTemplateWrapper>
    <Header />

    <AppContent>{children}</AppContent>
  </AppTemplateWrapper>
)
