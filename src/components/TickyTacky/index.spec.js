import * as React from 'react'

import TickyTacky from './'
import { shallow } from 'enzyme'

describe('TickyTacky', () => {
    it('matches the snapshot', () => {
        expect(toJson(shallow(<TickyTacky />))).toMatchSnapshot()
    })
})