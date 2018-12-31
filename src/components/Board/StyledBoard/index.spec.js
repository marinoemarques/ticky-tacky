import * as React from 'react'

import StyledBoard from './'
import { shallow } from 'enzyme'

describe('StyledBoard', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<StyledBoard />).first().render())).toMatchSnapshot()
  })
})
