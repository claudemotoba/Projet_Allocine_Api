import styled from 'styled-components'

const StyledMovieSection = styled.div`

    h1{
        margin-left: 3.5%;
        /* text-align: center; */
        margin-top: 20px;
        color: #CD0F0F;
    }
    @media only screen and (max-width: 900px) {
        margin-top: 50px;
        h1{
            font-size: 22px;
        }
    }

`

export default StyledMovieSection;