import styled from 'styled-components';

const StyledMovie = styled.div`

  display: flex;
  width: calc(23.25%*4);
  margin-left: 4%;
  flex-wrap: wrap;

  .film{
    max-width: 290px;
    height: 250px;
    box-sizing: border-box;
    color: white;
    margin-bottom: 20px;


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
    width: 100%;
    max-height: 100px;
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
        display: flex;
        height: 130px;
        h3{
            margin-top: 0;
            padding-top: 10px;
            font-size: 10px;
        }
        .film{
            max-width: 25%;
            height: 115px;
            box-sizing: border-box;
            /* border: solid red 1px; */
            padding: 0;
            color: white;
        }
  }

`;

export default StyledMovie