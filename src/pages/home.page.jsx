import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'

export const Home = () => {
  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <div tw="flex justify-center items-center flex-col p-8">
          <h1 tw="font-bold text-4xl font-rubik">
            Find out your Notice Period
          </h1>
        </div>

        <div tw="w-full flex justify-center items-center">Notice Goes Here</div>
      </Container>
    </AppTemplate>
  )
}
