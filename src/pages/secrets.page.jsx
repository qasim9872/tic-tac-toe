import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { SecretsList } from '../components/organisms/secrets-list/secrets-list.component'
import { useSecretsContext } from '../services/secrets/secrets.context'

export const Secrets = () => {
  const { secrets } = useSecretsContext()

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <div tw="flex flex-col p-8">
          <h1 tw="font-bold text-4xl font-rubik">What is your secret?</h1>
        </div>

        <div tw="bg-red-100 w-full flex flex-grow justify-center items-center">
          <SecretsList secrets={secrets} />
        </div>
      </Container>
    </AppTemplate>
  )
}
