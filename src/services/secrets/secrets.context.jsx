import React, { createContext, useContext, useState } from 'react'

const SecretsContext = createContext()

export const SecretsContextProvider = ({ children }) => {
  const [secrets, setSecrets] = useState([])

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
