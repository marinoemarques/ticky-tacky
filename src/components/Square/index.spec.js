import * as React from 'react'

import Square from './'
import { shallow } from 'enzyme'

describe('Square', () => {
    it('matches the snapshot', () => {
        expect(toJson(shallow(<Square />).first().render())).toMatchSnapshot()
    })
})
