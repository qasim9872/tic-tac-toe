import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { Button } from '../components/atoms/form/button.component'
import { Banner } from '../components/molecules/banner/banner.component'
import { Grid } from '../components/molecules/grid/grid.component'
import { useGrid } from '../hooks/use-grid'
import { useGameTurn } from '../hooks/use-game-turn'
import { icons } from '../components/atoms/icons/icons'

export const Home = () => {
  const { reset: resetGrid, grid, mark, getMark } = useGrid()
  const { reset: resetGameTurn, next, player } = useGameTurn()

  const map = {
    1: <icons.gameTick tw="w-12 h-12" />,
    2: <icons.gameCross tw="w-12 h-12" />,
  }

  const preview = {
    1: <icons.gameTick tw="w-8 h-8" />,
    2: <icons.gameCross tw="w-8 h-8" />,
  }

  const onClick = ({ x, y }) => {
    const current = getMark(x, y)
    console.log(`pressed (${x},${y}). `, { current })

    if (current) {
      alert(`invalid move. The box is already filled`)
      return
    }

    mark(x, y, map[player])
    next()
  }

  const restart = () => {
    resetGrid()
    resetGameTurn()
  }

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <Banner />

        <Grid grid={grid} onClick={onClick} />

        <div tw="flex flex-col justify-center items-center text-xl pt-8">
          {[1, 2].map(p => (
            <div
              tw="flex items-center text-xl"
              css={[player === p && tw`text-green-500`]}
            >
              Player {p} {'=>'} {preview[p]}
            </div>
          ))}

          <Button onClick={restart}>Reset</Button>
        </div>
      </Container>
    </AppTemplate>
  )
}
