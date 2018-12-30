import * as React from 'react'

import styled from 'styled-components'
import styledMap from 'styled-map'

const { useState } = React

const StyledSquare = styled.span`

  align-self: stretch;
  background-color: White;
  color: ${styledMap('player', {
    x: 'Crimson',
    default: 'SlateBlue'
  })};;
  cursor: ${props => props.onClick ? 'pointer' : 'not-allowed'};
  font-size: 16vh;
  font-weight: bold;
  grid-area: ${props => props.area || '0'};
  justify-self: stretch;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square ({ area }) {
  const [player, setPlayer] = useState('')

  return (
    <StyledSquare
      area={area}
      onClick={() => setPlayer(player === 'x' ? 'o' : 'x')}
      player={player}>
      {player}</StyledSquare>
  )
}
