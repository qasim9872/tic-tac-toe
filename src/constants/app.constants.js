import { ProviderWithContextHoc } from '../utils/hoc/provider-with-context'
const { homepage } = require('../../package.json')

const constants = {
  app: {
    icon: 'tick',
    href: homepage,
    name: 'Tic Tac Toe',
  },
  author: {
    name: 'Muhammad Qasim',
    href: 'https://github.com/qasim9872',
  },
  socials: [
    { icon: 'email', href: 'mailto:qasim9872@gmail.com' },
    { icon: 'github', href: 'https://github.com/qasim9872' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/qasim9872/' },
  ],
}

export const {
  Provider: GlobalConstantsProvider,
  useHook: useGlobalConstantsHook,
} = ProviderWithContextHoc(constants)
