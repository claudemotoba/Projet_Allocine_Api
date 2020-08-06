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

    useEffect(() => {
        (async ()=>{
            const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=3`)
            // console.log(movie.data.results);
            setMovies(movie.data.results)

   
           })();
    },[])

    const detailsMovie = (id) =>{
        const filterMovie = movies.filter(movie => movie.id == id)

        const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null

        //setMovies({ currentMovies: filterMovie })
    }
    

    return(
            <Wrapper>
                <Titre>Movies</Titre>
                <StyledMovie>
                    {movies.map(movie =>(
                        <Link className='film' key={movie.id} to={detailsMovie(movie.id)}>
                        {
                            movie.backdrop_path === null ? <Image src={`https://image.freepik.com/photos-gratuite/texture-pierre-noire-vue-dessus_88281-3900.jpg`}/> : <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                        }
                            <h3>{movie.title}</h3>
                        </Link>
                    ))}
                   
                </StyledMovie>
            </Wrapper>

    )
}

export default Movie