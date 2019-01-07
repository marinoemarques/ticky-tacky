import * as React from 'react'

import { times } from 'ramda'

import getPlayer from '../../utilities/getPlayer'
import Square from '../Square'

import { INITIAL_STATE, SQUARE_PLAYED } from './constants'
import reducer from './reducer'
import StyledBoard from './StyledBoard'

const NUMBER_OF_SQUARES = 9
const { useReducer } = React

function makeSquares (state, dispatch) {
  return times(
    idx => {
      const player = getPlayer(state, idx)
      const onClick = player
        ? undefined
        : () => dispatch({ type: SQUARE_PLAYED, square: idx })

      return (
        <Square
          key={`square-${idx}`}
          area={`square-${idx}`}
          onClick={onClick}
          player={player}
        />
      )
    },
    NUMBER_OF_SQUARES
  )
}

export default function Board () {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <StyledBoard>
      {makeSquares(state, dispatch)}
    </StyledBoard>
  )
}
