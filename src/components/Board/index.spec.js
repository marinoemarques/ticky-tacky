import * as React from 'react'

import Board from './'
import { create } from 'react-test-renderer'

describe('Board', () => {
  it('matches the snapshots', () => {
    const testInstance = create(<Board />)
    const squares = testInstance.root.findAllByType('span')

    expect(testInstance.toJSON()).toMatchSnapshot()
    squares[0].props.onClick()
    expect(testInstance.toJSON()).toMatchSnapshot()
  })
})
