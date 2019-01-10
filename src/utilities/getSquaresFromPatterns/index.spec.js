import getSquaresFromPatterns from '../getSquaresFromPatterns'

describe('utilities:getSquaresFromPatterns', () => {
  it('returns an empty list when there are no winning patterns', () => {
    expect(getSquaresFromPatterns([])).toHaveLength(0)
  })

  it('returns the list of squares when ' +
        'there is a single winning pattern', () => {
    const pattern = [0, 1, 2]

    expect(getSquaresFromPatterns([pattern])).toEqual(pattern)
  })

  it('returns the unique squares in a list when ' +
        'given two patterns', () => {
    const patterns = [[2, 4, 6], [0, 4, 8]]
    const squares = [0, 2, 4, 6, 8]

    expect(getSquaresFromPatterns(patterns)).toEqual(squares)
  })
})
