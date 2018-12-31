import * as React from 'react'

import StyledSquare from './'
import { shallow } from 'enzyme'

describe('StyledSquare', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<StyledSquare />).first().render())).toMatchSnapshot()
  })
})
