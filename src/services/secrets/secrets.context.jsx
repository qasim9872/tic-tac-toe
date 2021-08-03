import compareDesc from 'date-fns/compareDesc'
import React, { createContext, useContext, useState, useEffect } from 'react'
const { secrets: MockSecrets } = require('./secrets.mock.json')

const SecretsContext = createContext()

export const SecretsContextProvider = ({ children }) => {
  const [secrets, setSecrets] = useState(MockSecrets)
  const [inProgress, setInProgress] = useState(false)

  useEffect(() => {
    console.log(`secrets are updated. Sorting them`)

    setSecrets(previousSecrets => {
      return previousSecrets.sort(
        ({ createdOn: createdOn1 }, { createdOn: createdOn2 }) =>
          compareDesc(new Date(createdOn1), new Date(createdOn2)),
      )
    })
  }, [secrets])

  const addSecret = async secretToAdd => {
    setInProgress(true)

    setTimeout(() => {
      setSecrets(previousSecrets => [
        ...previousSecrets,
        { ...secretToAdd, createdOn: new Date().toISOString() },
      ])

      setInProgress(false)
    }, 2000)
  }

  return (
    <SecretsContext.Provider value={{ inProgress, secrets, addSecret }}>
      {children}
    </SecretsContext.Provider>
  )
}

export const useSecretsContext = () => useContext(SecretsContext)
