import tw from 'twin.macro'
import React, { useEffect, useState } from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { Banner } from '../components/molecules/banner/banner.component'
import { Grid } from '../components/molecules/grid/grid.component'
import { initializeGrid } from '../utils/helper'

export const Home = () => {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    const size = 3
    setGrid(initializeGrid(size))
  }, [])

  const updateContent = (x, y) => {
    setGrid(previousGrid =>
      previousGrid.map((rows, currentY) =>
        rows.map((content, currentX) =>
          currentX === x && currentY === y ? content + 1 : content,
        ),
      ),
    )
  }

  const onClick = ({ x, y }) => {
    console.log(`pressed (${x},${y}). `)
    updateContent(x, y)
  }

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <Banner />

        <Grid grid={grid} onClick={onClick} />
      </Container>
    </AppTemplate>
  )
}
