import styled from 'styled-components'
import styledMap from 'styled-map'

import {
  PLAYER_ONE,
  TACKY_COLOUR,
  TICKY_COLOUR
} from '../../../constants'

const StyledSquare = styled.span`
  align-self: stretch;
  background-color: White;
  color: ${styledMap('player', {
    [PLAYER_ONE]: TICKY_COLOUR,
    default: TACKY_COLOUR
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

export default StyledSquare
