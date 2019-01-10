import styled from 'styled-components'

import {
  PLAYER_ONE,
  TACKY_COLOUR,
  TICKY_COLOUR
} from '../../../constants'

function getColour ({ isLoser, player }) {
  if (isLoser) { return 'Gainsboro' }

  return player === PLAYER_ONE
    ? TICKY_COLOUR
    : TACKY_COLOUR
}

const StyledSquare = styled.span`
  align-self: stretch;
  background-color: White;
  color: ${getColour};;
  cursor: ${props => props.onClick ? 'pointer' : 'not-allowed'};
  font-size: 16vh;
  font-weight: bold;
  grid-area: ${props => props.area || '0'};
  justify-self: stretch;
  text-align: center;
  text-transform: uppercase;
`
StyledSquare.displayName = 'StyledSquare'

export default StyledSquare
