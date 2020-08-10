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
  }
  h1{
   
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