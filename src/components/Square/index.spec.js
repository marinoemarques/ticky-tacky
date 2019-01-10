import * as React from 'react'

import { shallow } from 'enzyme'

import {
  PLAYER_ONE,
  PLAYER_TWO,
  SQUARES
} from '../../constants'

import Square from './'

describe('Square', () => {
  it('matches the snapshot when unplayed', () => {
    expect(toJson(shallow(
      <Square
        area={SQUARES.bottomCenter}
      />
    ))).toMatchSnapshot()
  })

  it(`matches the snapshot when played by ${PLAYER_ONE}`, () => {
    expect(toJson(shallow(
      <Square
        area={SQUARES.middleCenter}
        player={PLAYER_ONE}
      />
    ))).toMatchSnapshot()
  })

  it(`matches the snapshot when played by ${PLAYER_TWO}`, () => {
    expect(toJson(shallow(
      <Square
        area={SQUARES.topCenter}
        player={PLAYER_TWO}
      />
    ))).toMatchSnapshot()
  })

  it(`matches the snapshot when lost by ${PLAYER_TWO}`, () => {
    expect(toJson(shallow(
      <Square
        area={SQUARES.topCenter}
        isLoser
        player={PLAYER_TWO}
      />
    ))).toMatchSnapshot()
  })
})
