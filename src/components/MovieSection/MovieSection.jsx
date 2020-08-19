import React from 'react'
import styled from 'styled-components'

import StyledMovieSection from './MovieSection.styled'
import Slider from './Slider/Slider'

const Titre = styled.h3`
    margin-left: 4%;
    padding-top: 30px;
    color: #CD0F0F;
`

const MovieSection = () =>{
    return(
        <StyledMovieSection>
            <Titre>RECOMMANDED FOR YOU</Titre>
            <Slider/>
        </StyledMovieSection>
    )
}

export default MovieSection;