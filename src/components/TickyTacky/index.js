import * as React from 'react'

import Board from '../Board'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 2.4rem;
  line-height: 3;
`

Header.displayName = 'Header'

const Crimson = styled.span`
  color: Crimson;
`
Crimson.displayName = 'Crimson'

const SlateBlue = styled.span`
  color: SlateBlue;
`
SlateBlue.displayName = 'SlateBlue'

export default function TickyTacky () {
  return (
  <>
    <Header>
      <Crimson>Ticky</Crimson>
      <SlateBlue>Tacky</SlateBlue>
    </Header>
    <Board />
  </>
  )
}
