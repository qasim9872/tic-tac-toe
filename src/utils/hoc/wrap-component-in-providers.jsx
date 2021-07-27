import * as React from 'react'

const WrapComponentInProvidersHoc = (Root, providers) => {
  return () => {
    let app = <Root />

    for (const Provider of providers) {
      app = <Provider>{app}</Provider>
    }

    return app
  }
}

export default WrapComponentInProvidersHoc
