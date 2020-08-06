import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import StyledMovie from './Movie.styled'
import { Link } from 'react-router-dom'

import { Image } from 'semantic-ui-react'
import Users from '../../components/MovieSection/Slider/Users'
import styled from 'styled-components'
import axios from 'axios'

const Titre = styled.h1`
    color: #CD0F0F;
    margin-left: 3.5%;
`

const Movie = () => {
    
    const api_key = '1ea7ac90e55beb953ffcdb03733ccf92'

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        (async ()=>{
            const movie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}`)
            console.log(movie.data);



            console.log(movie);
            
            
            setMovies(movie.data)
   
           })();
    },[])

    const filterUser = Users.filter(user => {
        return user.nom.includes(search)
    })

    const detailsMovie = (id) =>{

    }
    

    return(
            <Wrapper searchFucntion={ e => setSearch(e.target.value.toLowerCase())} >
            <Titre>Movies</Titre>
                <StyledMovie>
                    {filterUser.map((movie, i)=>(
                        <Link className='film' key={i} to={detailsMovie}>
                            <Image src={movie.image} />
                            <h2>{movie.nom}</h2>
                        </Link>
                    ))}
                   
                </StyledMovie>
            </Wrapper>

    )
}

export default Movie