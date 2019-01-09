import * as React from 'react'
import { create } from 'react-test-renderer'

import {
  PLAYER_ONE,
  PLAYER_TWO,
  SQUARES,
  UNPLAYED
} from '../../constants'

import Board from './'

const { topLeft, topCenter, middleCenter } = SQUARES

describe('Board', () => {
  it('plays correctly', () => {
    const testInstance = create(<Board />)
    const squares = testInstance.root.findAllByType('span')

    expect(squares[topLeft].props.children).toBe(UNPLAYED)
    expect(squares[topCenter].props.children).toBe(UNPLAYED)
    expect(squares[middleCenter].props.children).toBe(UNPLAYED)

    squares[middleCenter].props.onClick()
    expect(squares[topLeft].props.children).toBe(UNPLAYED)
    expect(squares[topCenter].props.children).toBe(UNPLAYED)
    expect(squares[middleCenter].props.children).toBe(PLAYER_ONE)

    squares[topCenter].props.onClick()
    expect(squares[topLeft].props.children).toBe(UNPLAYED)
    expect(squares[topCenter].props.children).toBe(PLAYER_TWO)
    expect(squares[middleCenter].props.children).toBe(PLAYER_ONE)

    squares[topLeft].props.onClick()
    expect(squares[topLeft].props.children).toBe(PLAYER_ONE)
    expect(squares[topCenter].props.children).toBe(PLAYER_TWO)
    expect(squares[middleCenter].props.children).toBe(PLAYER_ONE)
  })
})
