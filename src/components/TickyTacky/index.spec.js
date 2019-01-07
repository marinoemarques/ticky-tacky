import * as React from 'react'

import { shallow } from 'enzyme'

import TickyTacky, { Header, Tacky, Ticky } from './'

describe('Header', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<Header />).first().render())).toMatchSnapshot()
  })
})

describe('Tacky', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<Tacky />).first().render())).toMatchSnapshot()
  })
})

describe('Ticky', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<Ticky />).first().render())).toMatchSnapshot()
  })
})

describe('TickyTacky', () => {
  it('matches the snapshot', () => {
    expect(toJson(shallow(<TickyTacky />))).toMatchSnapshot()
  })
})
