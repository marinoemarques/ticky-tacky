import {
  PLAYER_ONE,
  PLAYER_TWO,
  UNPLAYED
} from '../../constants'

import getPlayer from './'

const state = { moves: [4, 1, 0, 5, 8] }

describe('utilities:getPlayer', () => {
  it(`returns ${JSON.stringify(PLAYER_ONE)} ` +
    `for the first player’s moves`, () => {
    const squareFour = 4

    expect(getPlayer(state, squareFour)).toBe(PLAYER_ONE)
  })

  it(`returns ${JSON.stringify(PLAYER_TWO)} ` +
    `for the second player’s moves`, () => {
    const squareOne = 1

    expect(getPlayer(state, squareOne)).toBe(PLAYER_TWO)
  })

  it(`returns an ${JSON.stringify(UNPLAYED)} ` +
    `if the square has not been played`, () => {
    const squareSeven = 7

    expect(getPlayer(state, squareSeven)).toBe(UNPLAYED)
  })
})
