import 'twin.macro'
import React from 'react'
import { SecretCard } from '../secret-card/secret-card.component'

export const SecretsList = ({ secrets = [] }) => {
  return (
    <div tw="flex w-full flex-col space-y-8 py-8 items-center">
      {secrets.length === 0 && (
        <>
          <h1 tw="text-4xl font-rubik text-red-400">No Secrets Available</h1>
          <h2 tw="text-xl font-rubik text-red-600">Whisper yours now!</h2>
        </>
      )}

      {secrets.map(secret => (
        <SecretCard key={secret.id} secret={secret} />
      ))}
    </div>
  )
}
