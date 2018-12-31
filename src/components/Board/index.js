import * as React from 'react'

import Square from '../Square'
import StyledBoard from './StyledBoard'

export default function Board () {
  return (
    <StyledBoard>
      <Square area='square-0' />
      <Square area='square-1' />
      <Square area='square-2' />
      <Square area='square-3' />
      <Square area='square-4' />
      <Square area='square-5' />
      <Square area='square-6' />
      <Square area='square-7' />
      <Square area='square-8' />
    </StyledBoard>
  )
}
