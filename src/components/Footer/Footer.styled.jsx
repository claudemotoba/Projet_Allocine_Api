import styled from 'styled-components';


const StyledFooter = styled.footer`
    height: 250px;
    background-color: #222222;
    color: #ffffff;
    /* font-size: 14px; */
    margin-top: auto;
        width:100%;
    .bas_de_page{
        background-color: #000;
        height: 90px;
        padding: 20px;
        text-align: center;
        /* color: #CD0F0F; */
    }
    .Contents{
        display: flex;
        width: calc(25%*4)
    }
    .follow{
        font-size: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .h3{
        margin-bottom: 0;
    }
    .follow a{
        margin-right: 20px;
        padding: 10px;
        text-decoration: none;
        color: white;
    }
    .rapide_link a{
        text-decoration: none;
        color: white;
        line-height: 33px;
    }
    .rapide_link a:hover{
        border-bottom: 1px solid white;
    }
    .follow a:hover{
        color: #CD0F0F;
        box-shadow: 0 0 20px rgba(0,0,0,.3);
    }
    p{
        margin-bottom: 20px;
    }
    .Contents div{
        width: 25%;
        padding: 20px;
    }
    img{
        margin-left: 70px;
        width: 200px;
        height: 200px;
    }


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