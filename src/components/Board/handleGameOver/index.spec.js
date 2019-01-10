import {
  GAME_OVER,
  PLAYER_ONE,
  PLAYER_TWO,
  SQUARES
} from '../../../constants'

import handleGameOver from './'

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

const dispatch = jest.fn()

describe('components:Board:handleGameOver', () => {
  it('does not update state on initialisation', () => {
    const state = { moves: [] }

    handleGameOver(state, dispatch)

    expect(dispatch).not.toHaveBeenCalled()
  })

  it('does not update state when game winnable but not won', () => {
    const state = {
      moves: [
        topLeft,
        topCenter,
        topRight,
        middleRight,
        middleCenter
      ]
    }

    handleGameOver(state, dispatch)

    expect(dispatch).not.toHaveBeenCalled()
  })

  it('updates state when game won by player one', () => {
    const state = {
      moves: [
        topLeft,
        topCenter,
        topRight,
        middleRight,
        middleCenter,
        middleLeft,
        bottomLeft
      ]
    }

    handleGameOver(state, dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: GAME_OVER,
      outcome: {
        player: PLAYER_ONE,
        patterns: [[topRight, middleCenter, bottomLeft]]
      }
    })
  })

  it('updates state when game won by player two', () => {
    const state = {
      moves: [
        topRight,
        topCenter,
        middleLeft,
        middleCenter,
        bottomRight,
        bottomCenter
      ]
    }

    handleGameOver(state, dispatch)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      type: GAME_OVER,
      outcome: {
        player: PLAYER_TWO,
        patterns: [[topCenter, middleCenter, bottomCenter]]
      }
    })
  })
})
