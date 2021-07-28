import { createContext } from 'react'
import { useInView } from 'react-intersection-observer'

export const UseStickyContext = createContext({})

export const UseStickyProvider = ({ children }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const sticky = { element: ref, isSticky: !inView }

  return (
    <UseStickyContext.Provider value={sticky}>
      {children}
    </UseStickyContext.Provider>
  )
}
