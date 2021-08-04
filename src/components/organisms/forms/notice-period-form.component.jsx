import tw from 'twin.macro'
import React, { useState } from 'react'

import { Input } from '../../atoms/form/input.component'
import { Button } from '../../atoms/form/button.component'

export const NoticePeriodForm = ({ onSubmit, isSubmitting }) => {
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

    if (!formData.secret) {
      alert('secret is required')
      return
    }

    resetForm()
    onSubmit(formData)
  }

  return (
    <form
      tw="mt-4 flex flex-col space-y-2 p-4 border-2 border-black"
      onSubmit={onSubmitForm}
    >
      <div tw="flex flex-row space-x-4">
        <Input
          name="secret"
          label="secret"
          type="text"
          value={formData.secret}
          onChange={handleChange}
          required
        />

        <Input
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
