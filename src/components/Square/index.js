import * as React from 'react'

import styled from 'styled-components'
import styledMap from 'styled-map'

const { useState } = React

const StyledSquare = styled.span`

  border: 1px solid LightGray;
  color: ${styledMap('player', {
    x: 'Crimson',
    default: 'SlateBlue'
  })};;
  cursor: ${props => props.onClick ? 'pointer' : 'not-allowed'};
  display: inline-block;
  font-size: 16vh;
  font-weight: bold;
  line-height: 20vh;
  min-height: 21vh;
  min-width: 21vh;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default function Square () {
  const [player, setPlayer] = useState('')

  return (
    <StyledSquare onClick={() => setPlayer(player === 'x' ? 'o' : 'x')}
      player={player}>
      {player}</StyledSquare>
  )
}
