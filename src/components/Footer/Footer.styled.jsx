import styled from 'styled-components';


const StyledFooter = styled.footer`
    background-color: #CD0F0F;
    height: 80px;
    padding: 20px;
    /* position: relative;
    bottom:0; */
    margin-top: auto;
    width:100%;


    p{
        font-size: 16px;
        margin-bottom: 0
    }
    @media only screen and (max-width: 900px) {
        position: absolute;
        bottom: 0;
        height: 60px;
        padding: 10px;
        p{

        }
    }

`;

export default StyledFooter;