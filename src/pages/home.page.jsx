import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { Banner } from '../components/molecules/banner/banner.component'
import { Grid } from '../components/molecules/grid/grid.component'
import { useGrid } from '../hooks/use-grid'
import { useGameTurn } from '../hooks/use-game-turn'

export const Home = () => {
  const { grid, mark, getMark } = useGrid()
  const { next, player } = useGameTurn()

  const onClick = ({ x, y }) => {
    const current = getMark(x, y)
    console.log(`pressed (${x},${y}). `, { current })

    mark(x, y, `Player-${player}`)
    next()
  }

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <Banner />

        <div tw="text-lg pb-8">Player {player}</div>

        <Grid grid={grid} onClick={onClick} />
      </Container>
    </AppTemplate>
  )
}
