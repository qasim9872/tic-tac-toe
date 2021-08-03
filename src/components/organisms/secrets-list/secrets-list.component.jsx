import 'twin.macro'
import React from 'react'
import { SecretCard } from '../secret-card/secret-card.component'

export const SecretsList = ({ secrets = [] }) => {
  return (
    <div tw="flex w-full flex-col space-y-8 py-8">
      {secrets.map(secret => (
        <SecretCard key={secret.id} secret={secret} />
      ))}
    </div>
  )
}
