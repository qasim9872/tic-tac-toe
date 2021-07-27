import { useEffect, useState, useRef, useCallback } from 'react'

export const useSticky = () => {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = useCallback(() => {
    if (!element || !element.current) return
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }, [element, setSticky])

  // This function handles the scroll performance issue
  const debounce = useCallback((func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        // eslint-disable-next-line no-undef
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll))
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}
