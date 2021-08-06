import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { Banner } from '../components/molecules/banner/banner.component'
import { Grid } from '../components/molecules/grid/grid.component'

export const Home = () => {
  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <Banner />

        <Grid />
      </Container>
    </AppTemplate>
  )
}
