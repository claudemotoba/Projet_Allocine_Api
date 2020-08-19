import styled from 'styled-components'

const StyledSlider = styled.div`
    width: calc(23.25%*4);
    margin-left: 3.5%;
    margin-right: 3.5%;
    color: white;
    .card{
        color: white;
        width: 250px;
        margin-right: 0;
    }
    .slick-arrow{
        background-color: black;
        height: 20px;
        width: 20px;
        border-radius: 10px;
    }
    .img{
        max-width: 100vh;
        height: 350px;
        box-sizing: border-box;
        color: white;
        border-radius: 10px;
    }
    p{
        margin-right: 10%;
        text-align: center;
        font-size: 17px;
    }
    figure:hover {
        box-shadow: 0 0 20px rgba(0,0,0,.3)
    }

    figure.figurefx {
        width: 290px;
        margin: 30px auto;
        padding: 0;
        display: block;
        position: relative;
        overflow: hidden; /* hide overflowing elements by default */
    }

    figure.figurefx figcaption {
        position: absolute;
        display: block;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        background: transparent;
        padding: 15px;
        z-index: 100;
        width: 90%;
        max-height: 100%;
        overflow: hidden;
        top: 50%;
        left: 0;
        -moz-transform: translate3d(-100%, -50%, 0); /* position caption outside layout horizontally and centered vertically */
        -webkit-transform: translate3d(-100%, -50%, 0);
        transform: translate3d(-100%, -50%, 0);
        opacity: 0;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
  
    figure.pushup .img {
        -moz-transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    figure.pushup figcaption {
        top: 100%;
        opacity: 1;
        -moz-transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);

    }

    figure.pushup:hover .img {
        -moz-transform: translate3d(0, -70px, 0); /* move image up vertically a bit for parallax effect */
        -webkit-transform: translate3d(0, -70px, 0);
        transform: translate3d(0, -20px, 0);
        opacity: .5;

    }

    figure.pushup:hover figcaption{
        -moz-transform: translate3d(0, -100%, 0); /* move caption up vertically to fully reveal caption */
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        box-shadow: 0px 0px 28px rgba(0, 0, 0, 1);

    }

    @media only screen and (max-width: 900px) {
        height: 130px;
        h3{
            font-size: 13px;
        }
        .card{
            max-width: 25vh;
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