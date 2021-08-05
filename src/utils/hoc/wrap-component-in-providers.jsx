import * as React from 'react'

export const WrapComponentInProvidersHoc = (Root, providers) => {
  const loc = () => {
    let app = <Root />

    for (const Provider of providers) {
      app = <Provider>{app}</Provider>
    }

    return app
  }

  return loc
}
