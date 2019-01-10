import { length } from 'ramda'
import { isNilOrEmpty, isNotEmpty, isOdd } from 'ramda-adjunct'

import {
  GAME_OVER,
  MINIMUM_MOVES_TO_WIN,
  PLAYER_ONE,
  PLAYER_TWO
} from '../../../constants'
import getWinningPattern from '../../../utilities/getWinningPattern'

export default function handleGameOver (state, dispatch) {
  const { moves, outcome } = state
  const plays = length(moves)

  if (plays >= MINIMUM_MOVES_TO_WIN) {
    const patterns = getWinningPattern(moves)

    if (isNotEmpty(patterns) && isNilOrEmpty(outcome)) {
      const player = isOdd(plays) ? PLAYER_ONE : PLAYER_TWO

      dispatch({
        type: GAME_OVER,
        outcome: {
          player,
          patterns
        }
      })
    }
  }
}
