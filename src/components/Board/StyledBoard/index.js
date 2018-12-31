import styled from 'styled-components'

const StyledBoard = styled.div`
    display: grid;
    grid-gap: 1px;
    background-color: Gray;
    grid-template-areas:
        "quare-0 square-1 square-2"
        "square-3 square-4 square-5"
        "square-6 square-7 square-8";
    grid-template-rows: 20vh 20vh 20vh;
    grid-template-columns: 20vh 20vh 20vh;
    margin: 2vh auto;
    height: calc(60vh + 2px);
    width: calc(60vc + 2px);
`
StyledBoard.displayName = 'StyledBoard'

export default StyledBoard
