import React from 'react'
import StyledMovieSection from './MovieSection.styled'
import Slider from './Slider/Slider'

const MovieSection = () =>{
    return(
        <StyledMovieSection>
            <h1>Recommended for you</h1> <br></br>
            <Slider/>
        </StyledMovieSection>
    )
}

export default MovieSection;