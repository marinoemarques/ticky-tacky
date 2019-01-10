import { flatten, pipe, sort, uniq } from 'ramda'

const sortNumerically = sort((a, b) => a - b)
const getSquaresFromPatterns = pipe(flatten, uniq, sortNumerically)

export default getSquaresFromPatterns
