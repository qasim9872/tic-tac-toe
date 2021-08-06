import { useEffect, useState } from 'react'
const TOTAL_PLAYERS = 2

export const useGameTurn = () => {
  const [turn, setTurn] = useState()
  const [player, setPlayer] = useState()

  useEffect(() => {
    // player 1 turn
    setTurn(0)
  }, [])

  useEffect(() => setPlayer((turn % TOTAL_PLAYERS) + 1), [turn])

  const next = () => setTurn(previousTurn => previousTurn + 1)
  const reset = () => setTurn(0)

  return { turn, next, player, reset }
}
