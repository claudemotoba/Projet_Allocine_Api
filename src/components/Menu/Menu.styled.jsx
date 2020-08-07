import styled from 'styled-components';


const StyledMenu = styled.div`

    display: flex;
    color: white;
    height: 80px;
    width: 100%;
    margin-left: 15%;
    padding-left: 13%;
    padding-top: 20px;


  a{
     font-size: 16px;
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
  }

`;


export default StyledMenu