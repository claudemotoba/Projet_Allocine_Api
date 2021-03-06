import styled from 'styled-components';


const StyledMenu = styled.div`

    display: flex;
    color: white;
    height: 80px;
    width: 100%;
    margin-left: 10%;
    padding-left: 13%;
    padding-top: 20px;


  a{
     font-size: 16px;
  }
  .input{
    margin-top: 15px;
    margin-left: 40px;
    height: 25px;
  }
  @media only screen and (max-width: 900px) {

      transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)' } ;
      height: 40vh;
      box-sizing: border-box;
      margin-left: 0;
      padding-left: 0;
      transition: transform 0.32s ease-in-out;
      flex-flow: column nowrap;
      background-color: black;
      z-index: 4;
      position: fixed;
      top: 30px;
      left: 0%;
      height: 45vh;
      margin-top: 0;

      .input{
        margin-left: 100px;
      }
  }

`;


export default StyledMenu