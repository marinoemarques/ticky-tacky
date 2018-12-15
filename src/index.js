import * as React from 'react'

import TickyTacky from './components/TickyTacky'
import { render } from 'react-dom'
import { unregister } from './serviceWorker'

render(<TickyTacky />, document.getElementById('root'))

unregister()