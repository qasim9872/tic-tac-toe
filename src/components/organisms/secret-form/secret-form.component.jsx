import tw from 'twin.macro'
import React, { useState } from 'react'

import { FormInput } from './form-input/form-input.component'
import { Button } from '../../atoms/button.component'

export const SecretForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ secret: '', author: '' })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  return (
    <form
      tw="mt-4 flex flex-col space-y-2 p-4 border-2 border-black"
      onSubmit={onSubmit}
    >
      <div tw="flex flex-row space-x-4">
        <FormInput
          name="secret"
          label="secret"
          type="text"
          value={formData.secret}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="author"
          label="author"
          type="text"
          value={formData.author}
          handleChange={handleChange}
        />
      </div>

      <Button override={tw`w-full px-0 justify-center items-center`}>
        Whisper
      </Button>
    </form>
  )
}
