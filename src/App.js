import React from 'react'
import 'twin.macro'

import { Secrets } from './pages/secrets.page'
import { SecretsContextProvider } from './services/secrets/secrets.context'

const App = () => (
  <SecretsContextProvider>
    <Secrets />
  </SecretsContextProvider>
)

export default App
