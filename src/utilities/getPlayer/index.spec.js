import {
  PLAYER_ONE,
  PLAYER_TWO,
  UNPLAYED
} from '../../constants'

import getPlayer from './'

const state = { moves: [4, 1, 0, 5, 8] }

describe('utilities:getPlayer', () => {
  it(`returns ${JSON.stringify(PLAYER_ONE)}` +
        `for the first player's moves`, () => {
    expect(getPlayer(state, 4)).toBe(PLAYER_ONE)
  })

  it(`returns ${JSON.stringify(PLAYER_TWO)}` +
        `for the second player's moves`, () => {
    expect(getPlayer(state, 1)).toBe(PLAYER_TWO)
  })

  it(`returns ${JSON.stringify(UNPLAYED)}` +
        `if the square hasd not been played`, () => {
    expect(getPlayer(state, 7)).toBe(UNPLAYED)
  })
})
