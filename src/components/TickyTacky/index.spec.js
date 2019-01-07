import * as React from 'react'

import { shallow } from 'enzyme'

import TickyTacky from './'

describe('TickyTacky', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<TickyTacky />))).toMatchSnapshot()
  })
})
