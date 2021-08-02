import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'

export const Home = () => {
  return (
    <AppTemplate>
      <Container>This is the home page</Container>
    </AppTemplate>
  )
}
