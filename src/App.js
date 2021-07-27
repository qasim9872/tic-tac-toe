import React from 'react'
import 'twin.macro'

import { Home } from './pages/home.page'
import { UseStickyProvider } from './store/use-sticky.store'

const App = () => (
  <UseStickyProvider>
    <Home />
  </UseStickyProvider>
)

export default App
