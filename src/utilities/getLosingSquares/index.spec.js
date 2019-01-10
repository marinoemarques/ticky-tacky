import getLosingSquares from './'

const moves = [0, 1, 2, 3, 4, 5, 6, 7, 8]

describe('utilities:getLosingSquares', () => {
  it('returns the losing squares correctly when won', () => {
    const patterns = [[0, 4, 8], [2, 4, 6]]

    expect(getLosingSquares(moves, patterns)).toEqual([1, 3, 5, 7])
  })

  it('returns the losing squares correctly when no winner', () => {
    const patterns = []

    expect(getLosingSquares(moves, patterns)).toEqual(moves)
  })

  it('returns an empty array if no winner', () => {
    expect(getLosingSquares(moves)).toEqual([])
  })
})
