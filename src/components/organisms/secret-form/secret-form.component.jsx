import tw from 'twin.macro'
import React, { useState } from 'react'

import { FormInput } from './form-input/form-input.component'
import { Button } from '../../atoms/button.component'

export const SecretForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({ secret: '', author: '' })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  const resetForm = () => {
    setFormData({ secret: '', author: '' })
  }

  const onSubmitForm = event => {
    event.preventDefault()
    resetForm()
    onSubmit(formData)
  }

  return (
    <form
      tw="mt-4 flex flex-col space-y-2 p-4 border-2 border-black"
      onSubmit={onSubmitForm}
    >
      <div tw="flex flex-row space-x-4">
        <FormInput
          name="secret"
          label="secret"
          type="text"
          value={formData.secret}
          onChange={handleChange}
          required
        />

        <FormInput
          name="author"
          label="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <Button
        isLoading={isSubmitting}
        override={tw`w-full px-0 justify-center items-center`}
      >
        Whisper
      </Button>
    </form>
  )
}
