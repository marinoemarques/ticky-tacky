import { length, pipe, values } from 'ramda'

const size = pipe(values, length)

// State
export const INITIAL_STATE = {
  moves: []
}

// Actions
export const SQUARE_PLAYED = 'SQUARE_PLAYED'

// Players
export const PLAYER_ONE = 'x'
export const PLAYER_TWO = 'o'
export const UNPLAYED = ''

// Colours
export const TACKY_COLOUR = 'SlateBlue'
export const TICKY_COLOUR = 'Crimson'

// Squares
export const SQUARES = {
  topLeft: 0,
  topCenter: 1,
  topRight: 2,
  middleLeft: 3,
  middleCenter: 4,
  middleRight: 5,
  bottomLeft: 6,
  bottomCenter: 7,
  bottomRight: 8
}
export const NUMBER_OF_SQUARES = size(SQUARES)

// Game play
export const SQUARES_TO_WIN = 3
export const WINNING_PATTERNS = [
  [
    SQUARES.topLeft,
    SQUARES.topCenter,
    SQUARES.topRight
  ],
  [
    SQUARES.middleLeft,
    SQUARES.middleCenter,
    SQUARES.middleRight
  ],
  [
    SQUARES.bottomLeft,
    SQUARES.bottomCenter,
    SQUARES.bottomRight
  ],
  [
    SQUARES.topLeft,
    SQUARES.middleLeft,
    SQUARES.bottomLeft
  ],
  [
    SQUARES.topCenter,
    SQUARES.middleCenter,
    SQUARES.bottomCenter
  ],
  [
    SQUARES.topRight,
    SQUARES.middleRight,
    SQUARES.bottomRight
  ],
  [
    SQUARES.topLeft,
    SQUARES.middleCenter,
    SQUARES.bottomRight
  ],
  [
    SQUARES.topRight,
    SQUARES.middleCenter,
    SQUARES.bottomLeft
  ]
]
