import { append } from 'ramda'

import { SQUARE_PLAYED } from '../constants'

import reducer from './'

const moves = [4, 1]
const square = 0
const newMoves = append(square, moves)

describe('components:Board:reducer', () => {
  it('adds a move to the board when a square is played', () => {
    const action = { type: SQUARE_PLAYED, square }

    expect(reducer({ moves }, action)).toEqual({ moves: newMoves })
  })

  it('returns the state unchanged when the action is unknown', () => {
    const action = { type: 'UNKNOWN', square }
    const state = { moves }

    expect(reducer(state, action)).toBe(state)
  })
})
