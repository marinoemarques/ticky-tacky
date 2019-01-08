import { append } from 'ramda'

import { SQUARE_PLAYED } from '../constants'

import reducer from './'

const moves = [4, 1]
const state = { moves }
const square = 0

describe('components:Board:reducer', () => {
  it('adds a move to the board when a square is played', () => {
    const action = { type: SQUARE_PLAYED, square }
    const updatedState = { moves: append(square, moves) }

    expect(reducer(state, action)).toEqual(updatedState)
  })

  it('returns the state unchanged when the action is unknown', () => {
    const action = { type: 'UNKNOWN', square }

    expect(reducer(state, action)).toBe(state)
  })
})
