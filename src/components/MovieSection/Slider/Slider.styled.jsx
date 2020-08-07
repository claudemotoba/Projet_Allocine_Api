import styled from 'styled-components'

const StyledSlider = styled.div`
    width: 93%;
    margin-left: 3.5%;
    margin-right: 3.5%;
    color: white;
    .card{
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
    @media only screen and (max-width: 900px) {
        height: 130px;
        h3{
            font-size: 13px;
        }
        .card{
            max-width: 300px;
            height: 130px;
            box-sizing: border-box;
            /* border: solid red 1px; */
            padding: 0;
            color: white;
        }
        margin-bottom: 10%;
    }

`

export default StyledSlider;