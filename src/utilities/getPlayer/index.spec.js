import {
  PLAYER_ONE,
  PLAYER_TWO,
  SQUARES,
  UNPLAYED
} from '../../constants'

import getPlayer from './'

const {
  bottomCenter,
  bottomRight,
  middleCenter,
  middleRight,
  topCenter,
  topLeft
} = SQUARES

const state = {
  moves: [
    middleCenter,
    topCenter,
    topLeft,
    middleRight,
    bottomRight
  ]
}

describe('utilities:getPlayer', () => {
  it(`returns ${JSON.stringify(PLAYER_ONE)} ` +
    `for the first player’s moves`, () => {
    expect(getPlayer(state, middleCenter)).toBe(PLAYER_ONE)
  })

  it(`returns ${JSON.stringify(PLAYER_TWO)} ` +
    `for the second player’s moves`, () => {
    expect(getPlayer(state, topCenter)).toBe(PLAYER_TWO)
  })

  it(`returns an ${JSON.stringify(UNPLAYED)} ` +
    `if the square has not been played`, () => {
    expect(getPlayer(state, bottomCenter)).toBe(UNPLAYED)
  })
})
