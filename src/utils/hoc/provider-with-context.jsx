import { useContext, useState, createContext } from 'react'

const ProviderWithContextHoc = defaults => {
  const context = createContext([defaults, () => {}])

  const useHook = () => useContext(context)

  const Provider = ({ children }) => {
    const state = useState(defaults)
    return <context.Provider value={state}>{children}</context.Provider>
  }

  return { Provider, useHook }
}

export default ProviderWithContextHoc
