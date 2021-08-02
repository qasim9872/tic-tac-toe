import 'twin.macro'
import React, { useState } from 'react'

import { FormInput } from './form-input/form-input.component'

export const SecretForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ secret: '', author: '' })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  return (
    <form tw="flex flex-row space-x-4" onSubmit={onSubmit}>
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

      {/* <div className="buttons">
        <CustomButton type="submit">Sign In </CustomButton>
      </div> */}
    </form>
  )
}
