import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { SecretsList } from '../components/organisms/secrets-list/secrets-list.component'
import { SecretForm } from '../components/organisms/secret-form/secret-form.component'
import { useSecretsContext } from '../services/secrets/secrets.context'

export const Secrets = () => {
  const { inProgress, secrets, addSecret } = useSecretsContext()

  const onSubmit = data => {
    console.log(`user submitted data`)
    console.log(data)

    addSecret({
      id: (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
      text: data.secret,
      author: data.author || 'Anonymous',
    }).then()
  }

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <div tw="flex justify-center items-center flex-col p-8">
          <h1 tw="font-bold text-4xl font-rubik">What is your secret?</h1>
          <SecretForm isSubmitting={inProgress} onSubmit={onSubmit} />
        </div>

        <div tw="w-full flex justify-center items-center">
          <SecretsList secrets={secrets} />
        </div>
      </Container>
    </AppTemplate>
  )
}
