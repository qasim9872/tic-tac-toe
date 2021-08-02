import React from 'react'
import tw from 'twin.macro'

import { Footer } from '../organisms/footer/footer.component'

const AppContainer = tw.div`flex min-h-screen min-w-full bg-blue-100 justify-center`
const AppTemplateWrapper = tw.div`container flex flex-col`
const AppContent = tw.div`flex flex-grow space-y-6`

export const AppTemplate = ({ children }) => {
  return (
    <AppContainer>
      <AppTemplateWrapper>
        <AppContent>{children}</AppContent>

        <Footer />
      </AppTemplateWrapper>
    </AppContainer>
  )
}
