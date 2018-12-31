import * as React from 'react'

import { PLAYER_ONE, PLAYER_TWO } from '../../constants'

import StyledSquare from './StyledSquare'

const { useState } = React

export default function Square ({ area }) {
  const [player, setPlayer] = useState('')

  return (
    <StyledSquare
      area={area}
      onClick={() => setPlayer(player === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE)}
      player={player}>
      {player}</StyledSquare>
  )
}
