import React, { createContext, useContext, useState } from 'react'
const { secrets: MockSecrets } = require('./secrets.mock.json')

const SecretsContext = createContext()

export const SecretsContextProvider = ({ children }) => {
  const [secrets, setSecrets] = useState(MockSecrets)

  const addSecret = secretToAdd => {
    console.log(`adding secret`)
    setSecrets(previousSecrets => [...previousSecrets, secretToAdd])
  }

  return (
    <SecretsContext.Provider value={{ secrets, addSecret }}>
      {children}
    </SecretsContext.Provider>
  )
}

export const useSecretsContext = () => useContext(SecretsContext)
