import styled from 'styled-components'

const StyledSimilarMovie = styled.div`
    width: 93%;
    margin-left: 3.5%;
    margin-right: 3.5%;
    color: white;
    .similar{
        max-width: 300px;
        height: 250px;
        box-sizing: border-box;
        /* border: solid red 1px; */
        padding: 0;
        color: white;
    }
    .slick-arrow{
        background-color: black;
        height: 20px;
        width: 20px;
        border-radius: 10px;
    }
    h1{
        margin-left: 6px;
    }
    @media only screen and (max-width: 900px) {
        height: 130px;
        h3{
            font-size: 13px;
        }
        .similar{
            max-width: 25vh;
            height: 130px;
            box-sizing: border-box;
            /* border: solid red 1px; */
            padding: 0;
            color: white;
        }
        h1{
            margin-left: 3.5%;
        }
        margin-bottom: 10%;
    }
`

export default StyledSimilarMovie;