import styled from 'styled-components'

const StyledSlider = styled.div`
    width: 93%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    color: white;
    .card{
        max-width: 300px;
        height: 250px;
        box-sizing: border-box;
        /* border: solid red 1px; */
        padding: 0
    }
    image{
        max-width: 100%;
        height: 50%;
    }
    .slick-arrow{
        background-color: black;
        height: 20px;
        width: 20px;
        border-radius: 10px;
    }

`

export default StyledSlider;