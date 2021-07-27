import React from 'react'
import tw from 'twin.macro'

import { AppTemplate } from '../components/templates/app.template'
import { Hero } from '../components/organisms/hero.organism'
import { PlaceHolder } from '../components/organisms/placeholder.organism'

export const Home = () => {
  return (
    <>
      <Hero />
      <AppTemplate>
        {[
          tw`bg-yellow-100`,
          tw`bg-pink-400`,
          tw`bg-green-100`,
          tw`bg-red-100`,
          tw`bg-indigo-300`,
        ].map((color, index) => (
          <PlaceHolder
            color={color}
            key={`${color}-${index}`}
            text={`Place Holder ${index + 1}`}
          />
        ))}
      </AppTemplate>
    </>
  )
}
