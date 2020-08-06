import React from 'react'
import Wrapper from '../../components/Wrapper'
import StyledMovie from './Movie.styled'
import { Link } from 'react-router-dom'

import { Image } from 'semantic-ui-react'
import Users from '../../components/MovieSection/Slider/Users'
import styled from 'styled-components'

const Titre = styled.h1`
    color: #CD0F0F;
    margin-left: 3.5%;
`

const Movie = () => {
    return(
            <Wrapper>
            <Titre>Movies</Titre>
                <StyledMovie>
                    {Users.map((user, i)=>(
                        <Link className='film'>
                            <Image src={user.image} />
                            <h2>{user.nom}</h2>
                        </Link>
                    ))}
                </StyledMovie>
            </Wrapper>

    )
}

export default Movie