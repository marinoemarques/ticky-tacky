import '@babel/polyfill'

import * as React from 'react'

import GlobalStyle from './styles'
import TickyTacky from './components/TickyTacky'
import { render } from 'react-dom'
import { unregister } from './serviceWorker'

render(
    <>
      <TickyTacky />
      <GlobalStyle />
    </>,
    document.getElementById('root')
)

unregister()
