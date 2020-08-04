import React from 'react'
import Wrapper from '../../components/Wrapper'
import StyledHome from './Home.styled'

import styled from 'styled-components';
import Img from '../../images/font.png'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

const StyledDiv = styled.div`
    height: 70vh;
    background-image: url(${Img});
    /* background-repeat: no-repeat; */
    /* background-size: 100%; */
`

const Index = () => {
    return (
        <StyledHome>
            <StyledDiv>
                <Menu id='haut'/>

                <Footer Lien='#haut'/>
            </StyledDiv>
        </StyledHome>
    )
}

export default Index;