import * as React from 'react'

import { shallow } from 'enzyme'

import {
  PLAYER_ONE,
  PLAYER_TWO,
  SQUARES
} from '../../../constants'

import StyledSquare from './'

describe('StyledSquare', () => {
  it('matches the snapshot with no player', () => {
    expect(toJson(shallow(
      <StyledSquare />
    ).first().render())).toMatchSnapshot()
  })

  it(`matches the snapshot with player ${PLAYER_ONE}`, () => {
    expect(toJson(shallow(
      <StyledSquare
        area={SQUARES.middleCenter}
        player={PLAYER_ONE}
      >{PLAYER_ONE}</StyledSquare>
    ).first().render())).toMatchSnapshot()
  })

  it(`matches the snapshot with player ${PLAYER_TWO}`, () => {
    expect(toJson(shallow(
      <StyledSquare
        area={SQUARES.topLeft}
        player={PLAYER_TWO}
      >{PLAYER_TWO}</StyledSquare>
    ).first().render())).toMatchSnapshot()
  })
})
