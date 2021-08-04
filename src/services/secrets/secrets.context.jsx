import compareDesc from 'date-fns/compareDesc'
import React, { createContext, useContext, useState, useEffect } from 'react'

import {
  transformSecret,
  addSecretRequest,
  getSecretsRequest,
} from './secrets.service'

const SecretsContext = createContext()

export const SecretsContextProvider = ({ children }) => {
  const [secrets, setSecrets] = useState([])
  const [inProgress, setInProgress] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setInProgress(true)

    getSecretsRequest()
      .then(loadedSecrets => loadedSecrets.map(transformSecret))
      .then(transformedSecrets => {
        setSecrets(transformedSecrets)
        setInProgress(false)
      })
      .catch(err => {
        console.log(`an error occurred while loading secrets`, err)
        setError(err.toString())
      })
      .finally(() => {
        setInProgress(false)
      })
  }, [])

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

    try {
      await addSecretRequest(secretToAdd)
    } catch (err) {
      console.log(`an error occurred while adding secret`, err)
      setError(err.toString())
    } finally {
      setInProgress(false)
    }
  }

  return (
    <SecretsContext.Provider value={{ error, inProgress, secrets, addSecret }}>
      {children}
    </SecretsContext.Provider>
  )
}

export const useSecretsContext = () => useContext(SecretsContext)
