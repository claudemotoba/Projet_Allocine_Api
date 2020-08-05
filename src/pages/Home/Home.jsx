import React from 'react'
import Wrapper from '../../components/Wrapper'
import StyledHome from './Home.styled'

import styled from 'styled-components';
import Img from '../../images/font.png'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'
import Section1 from '../../components/Section1/Section1'
import MovieSection from '../../components/MovieSection/MovieSection';

const StyledDiv = styled.div`
    height: 50vh;
    background-image: url(${Img});
    /* background-repeat: no-repeat; */
    /* background-size: 100%; */
`

const Index = () => {
    return (
        <StyledHome>
            <StyledDiv>
                <Menu id='haut'/>
                <Section1/>
                <MovieSection/>
                
            </StyledDiv>
            
        </StyledHome>
    )
}

export default Index;