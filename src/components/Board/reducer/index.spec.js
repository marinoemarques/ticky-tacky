import { append } from 'ramda'

import { GAME_OVER, SQUARES, SQUARE_PLAYED } from '../../../constants'

import reducer from './'

const moves = [SQUARES.middleCenter, SQUARES.topCenter]
const state = { moves }
const square = SQUARES.topLeft

describe('components:Board:reducer', () => {
  it('adds the outcome to the state when the game ends', () => {
    const outcome = 'outcome'
    const action = { type: GAME_OVER, outcome }
    const updatedState = { ...state, outcome }

    expect(reducer(state, action)).toEqual(updatedState)
  })

  it('adds a move to the board when a square is played', () => {
    const action = { type: SQUARE_PLAYED, square }
    const updatedState = { moves: append(square, moves) }

    expect(reducer(state, action)).toEqual(updatedState)
  })

  it('returns the state unchanged when the action is unknown', () => {
    const action = { type: 'UNKNOWN', square }

    expect(reducer(state, action)).toBe(state)
  })

  it('works even when the moves array is missing', () => {
    const action = { type: 'UNKNOWN', square }

    expect(reducer({}, action)).toEqual({})
  })
})
