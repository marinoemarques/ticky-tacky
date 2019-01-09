import { SQUARE_PLAYED } from '../../constants'

export default function reducer (state, action) {
  switch (action.type) {
    case SQUARE_PLAYED:
      return {
        ...state,
        moves: [
          ...state.moves,
          action.square
        ]
      }
    default:
      return state
  }
}
