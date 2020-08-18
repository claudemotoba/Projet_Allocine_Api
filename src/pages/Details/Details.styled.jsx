import styled from 'styled-components'

const StyledDetails = styled.div`
    margin-left: 7.5%;
    margin-right: 7.5%;
    margin-bottom: 5%;
    display: flex;
    /* background-color: red; */
    background-size: cover;
    height: 73.5vh;

    position: relative;
    z-index: -3;
    .image{
        max-width: 400px !important;
        height: 470px
    }
    .content{
        margin-left: 5%;
    }
    p, span{
        font-size: 16px;
    }
    @media only screen and (max-width: 900px) {
        display: block;
        .image{
            margin-top: 10px;
            margin-left: 4%;
            margin-right: 4%;
            max-width: 100vh;
            max-height: 25vh;
            height: 400px
        }
        h1{
            margin-top: 25px;
        }
    }
`

export default StyledDetails