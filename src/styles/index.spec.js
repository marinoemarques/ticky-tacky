import * as React from 'react'

import GlobalStyle from './'
import { shallow } from 'enzyme'

describe('GlobalStyle', () => {
    it('matches the snapshot', () => {
        expect(toJson(shallow(<GlobalStyle />))).toMatchSnapshot()
    })
});
