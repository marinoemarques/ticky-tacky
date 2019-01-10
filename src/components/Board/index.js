import * as React from 'react'

import { includes, times } from 'ramda'

import {
  INITIAL_STATE,
  NUMBER_OF_SQUARES,
  SQUARE_PLAYED
} from '../../constants'
import getLosingSquares from '../../utilities/getLosingSquares'
import getPlayer from '../../utilities/getPlayer'
import Square from '../Square'

import handleGameOver from './handleGameOver'
import reducer from './reducer'
import StyledBoard from './StyledBoard'

const { useEffect, useReducer } = React

function makeSquares (state, dispatch) {
  const { moves, outcome: { patterns } = {} } = state
  const losers = getLosingSquares(moves, patterns)

  return times(
    idx => {
      const player = getPlayer(state, idx)
      const onClick = player || patterns
        ? undefined
        : () => dispatch({ type: SQUARE_PLAYED, square: idx })

      return (
        <Square
          area={`square-${idx}`}
          isLoser={includes(idx, losers)}
          key={`square-${idx}`}
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

  useEffect(() => {
    handleGameOver(state, dispatch)
  })

  return (
    <StyledBoard>
      {makeSquares(state, dispatch)}
    </StyledBoard>
  )
}
