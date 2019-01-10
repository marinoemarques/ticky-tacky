import { SQUARES } from '../../constants'

import getWinningPatterns from './'

const {
  bottomCenter,
  bottomLeft,
  bottomRight,
  middleCenter,
  middleLeft,
  middleRight,
  topCenter,
  topLeft,
  topRight
} = SQUARES

describe('utilities:getWinningPatterns', () => {
  it('returns an empty list when there is no possible win', () => {
    const moves = [
      middleCenter, //  x | o |
      topCenter, // -----------
      topLeft, //    | x | o
      middleRight // -----------
    ] //    |   |

    expect(getWinningPatterns(moves)).toHaveLength(0)
  })

  it('returns an empty list when there is no win', () => {
    const moves = [
      middleCenter, //  o | x | o
      topLeft, // -----------
      bottomLeft, //  o | x | x
      topRight, // -----------
      topCenter, //  x | o | x
      bottomCenter,
      middleRight,
      middleLeft,
      bottomRight
    ]

    expect(getWinningPatterns(moves)).toHaveLength(0)
  })

  it('returns a list with a single pattern for a single win', () => {
    const moves = [
      middleCenter, //  X | o | o
      topCenter, // -----------
      topLeft, //  X | x |
      bottomRight, // -----------
      bottomLeft, //  X |   | o
      topRight,
      middleLeft
    ]

    expect(getWinningPatterns(moves)).toEqual([
      [topLeft, middleLeft, bottomLeft]
    ])
  })

  it('returns a list with two patterns for a double win', () => {
    const moves = [
      topLeft, //  X | o | X
      topCenter, // -----------
      topRight, //  o | X | o
      middleRight, // -----------
      bottomRight, //  X | o | X
      bottomCenter,
      bottomLeft,
      middleLeft,
      middleCenter
    ]

    expect(getWinningPatterns(moves)).toEqual([
      [topLeft, middleCenter, bottomRight],
      [topRight, middleCenter, bottomLeft]
    ])
  })
})
