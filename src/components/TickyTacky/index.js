import * as React from 'react'

import styled from 'styled-components'

import { TACKY_COLOUR, TICKY_COLOUR } from '../../constants'
import Board from '../Board'

export const Header = styled.h1`
  font-size: 2.4rem;
  line-height: 3;
`
Header.displayName = 'Header'

export const Ticky = styled.span`
  color: ${TICKY_COLOUR};

  &:before {
    content: 'Ticky'
  }
`
Ticky.displayName = 'Ticky'

export const Tacky = styled.span`
  color: ${TACKY_COLOUR};

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
