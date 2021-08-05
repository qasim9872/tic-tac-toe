import * as React from 'react'
import { useContext, useState } from 'react'

export const ProviderWithContextHoc = defaults => {
  const context = React.createContext([defaults, () => {}])

  const useHook = () => useContext(context)

  const Provider = ({ children }) => {
    const state = useState(defaults)
    return <context.Provider value={state}>{children}</context.Provider>
  }

  return { Provider, useHook }
}
