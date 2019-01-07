import * as React from 'react'

import styled from 'styled-components'

import Board from '../Board'

export const Header = styled.h1`
  font-size: 2.4rem;
  line-height: 3;
`
Header.displayName = 'Header'

export const Ticky = styled.span`
  color: Crimson;

  &:before {
    content: 'Ticky'
  }
`
Ticky.displayName = 'Ticky'

export const Tacky = styled.span`
  color: SlateBlue;

  &:before {
    content: 'Tacky'
  }
`
Tacky.displayName = 'Tacky'

export default function TickyTacky () {
  return (
  <>
    <Header>
      <Ticky /><Tacky />
    </Header>
    <Board />
  </>
  )
}
