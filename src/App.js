import React from 'react'
import 'twin.macro'
import { GlobalConstantsProvider } from './constants/app.constants'

import { Home } from './pages/home.page'
import { WrapComponentInProvidersHoc } from './utils/hoc/wrap-component-in-providers'

const App = () => <Home />

export default WrapComponentInProvidersHoc(App, [GlobalConstantsProvider])
