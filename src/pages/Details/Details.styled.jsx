import styled from 'styled-components'

const StyledDetails = styled.div`
    margin-left: 3.5%;
    margin-right: 7.5%;
    display: flex;
    .image{
        max-width: 500px;
        height: 400px
    }
    .content{
        margin-left: 5%;
    }
    @media only screen and (max-width: 900px) {
        display: block;
        .image{
            max-width: 100%;
            max-height: 25vh;
            height: 400px
        }
    }
`

export default StyledDetails