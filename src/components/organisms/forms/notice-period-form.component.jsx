import tw from 'twin.macro'
import React, { useState } from 'react'

import { Input } from '../../atoms/form/input.component'
import { Button } from '../../atoms/form/button.component'

export const NoticePeriodForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    noticePeriod: '',
    intendedTerminationDate: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(previous => ({ ...previous, [name]: value }))
  }

  const resetForm = () =>
    setFormData({
      noticePeriod: '',
      intendedTerminationDate: '',
    })

  const onSubmitForm = event => {
    event.preventDefault()

    resetForm()
    onSubmit(formData)
  }

  return (
    <form
      tw="mt-4 flex flex-col space-y-2 p-4 border-2 border-black w-full lg:w-2/3"
      onSubmit={onSubmitForm}
    >
      <div tw="flex flex-col space-y-3">
        <Input
          name="noticePeriod"
          label="Notice Period (Days)"
          type="text"
          value={formData.noticePeriod}
          onChange={handleChange}
          required
        />

        <Input
          name="intendedTerminationDate"
          label="Intended Termination Date"
          type="date"
          value={formData.intendedTerminationDate}
          onChange={handleChange}
          required
        />
      </div>

      <div tw="flex flex-row justify-center">
        <Button
          isLoading={isSubmitting}
          onClick={onSubmitForm}
          override={tw`flex-grow-0 px-0 justify-center items-center`}
        >
          Calculate
        </Button>

        <Button
          override={tw`flex-grow-0 px-0 justify-center items-center bg-gray-300 hover:bg-gray-400`}
          onClick={resetForm}
        >
          Reset
        </Button>
      </div>
    </form>
  )
}
