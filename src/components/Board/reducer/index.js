import { GAME_OVER, SQUARE_PLAYED } from '../../../constants'

export default function reducer (state, { square, type, outcome }) {
  const { moves = [] } = state

  switch (type) {
    case GAME_OVER:
      return {
        ...state,
        outcome
      }
    case SQUARE_PLAYED:
      return {
        ...state,
        moves: [
          ...moves,
          square
        ]
      }
    default:
      return state
  }
}
