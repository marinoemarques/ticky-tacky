import { addIndex, filter, intersection, length, pipe } from 'ramda'
import { isEven, isOdd } from 'ramda-adjunct'

import { SQUARES_TO_WIN, WINNING_PATTERNS } from '../../constants'

const filterWithIndex = addIndex(filter)

export default function getWinningPatterns (moves) {
  const plays = length(moves)
  const isX = isOdd(plays)

  const squaresPlayed = isX
    ? filterWithIndex((_, idx) => isEven(idx), moves)
    : filterWithIndex((_, idx) => isOdd(idx), moves)

  const getMatchingSquareCount = pipe(
    intersection(squaresPlayed),
    length
  )

  return filter(
    pattern => getMatchingSquareCount(pattern) === SQUARES_TO_WIN,
    WINNING_PATTERNS
  )
}
