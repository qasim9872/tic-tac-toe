import tw from 'twin.macro'
import React from 'react'

const FieldWrapper = tw.div`relative`
const TextLabel = tw.label`leading-7 text-sm text-gray-600`
const TextField = tw.input`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FieldWrapper>
      {label ? <TextLabel>{label}</TextLabel> : null}
      <TextField {...otherProps} />
    </FieldWrapper>
  )
}
