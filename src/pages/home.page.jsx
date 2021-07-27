import React from 'react'
import tw from 'twin.macro'

import { AppTemplate } from '../components/templates/app.template'
import { Hero } from '../components/organisms/hero.organism'

export const Home = () => {
  return (
    <AppTemplate>
      {[
        tw`bg-yellow-100`,
        tw`bg-pink-400`,
        tw`bg-green-100`,
        tw`bg-red-100`,
        tw`bg-indigo-300`,
      ].map((color, index) => (
        <Hero
          color={color}
          key={`${color}-${index}`}
          text={`Hero ${index + 1}`}
        />
      ))}
    </AppTemplate>
  )
}
