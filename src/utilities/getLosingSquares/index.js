import { without } from 'ramda'
import { isUndefined } from 'ramda-adjunct'

import getSquaresFromPatterns from '../getSquaresFromPatterns'

export default function getLosingSquares (moves, patterns) {
  if (isUndefined(patterns)) { return [] }

  const winners = getSquaresFromPatterns(patterns)

  return without(winners, moves)
}
