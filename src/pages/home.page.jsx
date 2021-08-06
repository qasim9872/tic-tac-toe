import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { Banner } from '../components/molecules/banner/banner.component'
import { Grid } from '../components/molecules/grid/grid.component'
import { useGrid } from '../hooks/use-grid'
import { useGameTurn } from '../hooks/use-game-turn'
import { icons } from '../components/atoms/icons/icons'

export const Home = () => {
  const { reset, grid, mark, getMark } = useGrid()
  const { next, player } = useGameTurn()

  const map = {
    1: <icons.gameTick tw="w-12 h-12" />,
    2: <icons.gameCross tw="w-12 h-12" />,
  }

  const onClick = ({ x, y }) => {
    const current = getMark(x, y)
    console.log(`pressed (${x},${y}). `, { current })

    mark(x, y, map[player])
    next()
  }

  const restart = () => reset()

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <Banner />

        <Grid grid={grid} onClick={onClick} />

        <div tw="flex justify-center items-center text-xl pb-8">
          Player {player} {map[player]}
        </div>
      </Container>
    </AppTemplate>
  )
}
