import * as React from 'react'

import Square from './'
import { create } from 'react-test-renderer'

describe('Square', () => {
  it('matches the snapshots', () => {
    const testInstance = create(<Square />)
    const square = testInstance.root.findByType('span')

    expect(testInstance.toJSON()).toMatchSnapshot()
    square.props.onClick()
    expect(testInstance.toJSON()).toMatchSnapshot()
    square.props.onClick()
    expect(testInstance.toJSON()).toMatchSnapshot()
  })
})
