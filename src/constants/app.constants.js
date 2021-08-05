import { ProviderWithContextHoc } from '../utils/hoc/provider-with-context'

const constants = {
  appName: 'Tic Tac Toe',
  author: 'Muhammad Qasim',
  socials: {
    twitter: '',
    github: '',
    linkedin: '',
  },
}

export const {
  Provider: GlobalConstantsProvider,
  useHook: useGlobalConstantsHook,
} = ProviderWithContextHoc(constants)
