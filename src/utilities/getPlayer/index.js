import {
  PLAYER_ONE,
  PLAYER_TWO,
  UNPLAYED
} from '../../constants'
import { isEven, isNonNegative } from 'ramda-adjunct'

import { indexOf } from 'ramda'

export default function getPlayer ({ moves }, square) {
  const move = indexOf(square, moves)

  if (isNonNegative(move)) {
    return isEven(move) ? PLAYER_ONE : PLAYER_TWO
  }

  return UNPLAYED
}
