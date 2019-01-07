import * as React from 'react'

import StyledSquare from './StyledSquare'

export default function Square ({ area, onClick, player }) {
  return (
    <StyledSquare
      area={area}
      onClick={onClick}
      player={player}>
      {player}</StyledSquare>
  )
}
