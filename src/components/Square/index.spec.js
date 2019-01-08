import * as React from 'react'

import { shallow } from 'enzyme'

import { PLAYER_ONE, PLAYER_TWO } from '../../constants'

import Square from './'

describe('Square', () => {
  it('matches the snapshot when unplayed', () => {
    expect(toJson(shallow(
      <Square area='7' />
    ))).toMatchSnapshot()
  })

  it(`matches the snapshot when played by ${PLAYER_ONE}`, () => {
    expect(toJson(shallow(
      <Square area='4' player={PLAYER_ONE} />
    ))).toMatchSnapshot()
  })

  it(`matches the snapshot when played by ${PLAYER_TWO}`, () => {
    expect(toJson(shallow(
      <Square area='1' player={PLAYER_TWO} />
    ))).toMatchSnapshot()
  })
})
