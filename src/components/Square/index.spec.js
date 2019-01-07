import * as React from 'react'

import Square from './'
import { shallow } from 'enzyme'

describe('Square', () => {
  it('matches the snapshots', () => {
    expect(toJson(shallow(<Square />))).toMatchSnapshot()
  })
})
