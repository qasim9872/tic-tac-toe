import { createContext } from 'react'
import { useSticky } from './use-sticky.hook'

export const UseStickyContext = createContext({})

export const UseStickyProvider = ({ children }) => {
  const sticky = useSticky()

  return (
    <UseStickyContext.Provider value={sticky}>
      {children}
    </UseStickyContext.Provider>
  )
}
