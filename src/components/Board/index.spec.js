import * as React from 'react'
import { create } from 'react-test-renderer'

import {
  PLAYER_ONE,
  PLAYER_TWO,
  UNPLAYED
} from '../../constants'

import Board from './'

describe('Board', () => {
  it('plays correctly', () => {
    const testInstance = create(<Board />)
    const squares = testInstance.root.findAllByType('span')

    expect(squares[0].props.children).toBe(UNPLAYED)
    expect(squares[1].props.children).toBe(UNPLAYED)
    expect(squares[4].props.children).toBe(UNPLAYED)

    squares[4].props.onClick()
    expect(squares[0].props.children).toBe(UNPLAYED)
    expect(squares[1].props.children).toBe(UNPLAYED)
    expect(squares[4].props.children).toBe(PLAYER_ONE)

    squares[1].props.onClick()
    expect(squares[0].props.children).toBe(UNPLAYED)
    expect(squares[1].props.children).toBe(PLAYER_TWO)
    expect(squares[4].props.children).toBe(PLAYER_ONE)

    squares[0].props.onClick()
    expect(squares[0].props.children).toBe(PLAYER_ONE)
    expect(squares[1].props.children).toBe(PLAYER_TWO)
    expect(squares[4].props.children).toBe(PLAYER_ONE)
  })
})
