import * as React from 'react'

import StyledSquare from './StyledSquare'

export default function Square ({ area, isLoser, onClick, player }) {
  return (
    <StyledSquare
      area={area}
      isLoser={isLoser}
      onClick={onClick}
      player={player}
    >
      {player}
    </StyledSquare>
  )
}
