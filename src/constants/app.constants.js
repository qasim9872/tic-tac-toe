import { ProviderWithContextHoc } from '../utils/hoc/provider-with-context'

const constants = {
  appName: 'Tic Tac Toe',
  author: 'Muhammad Qasim',
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
