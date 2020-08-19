import React, { useState, useEffect } from 'react'
import Wrapper from '../../components/Wrapper'
import StyledMovie from './Movie.styled'
import { Link } from 'react-router-dom'

import { Image } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

const Titre = styled.h3`
    color: #CD0F0F;
    margin-left: 7%;
    padding-top: 3%;
`

const Movie = () => {
    
    const api_key = '1ea7ac90e55beb953ffcdb03733ccf92'

    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async ()=>{
            const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=3`)
            console.log(movie.data.results);
            setMovies(movie.data.results)

   
           })();
    },[])
    

    return(
            <Wrapper>
                <Titre>MOVIES</Titre>
                <StyledMovie>
                    {movies.map(movie =>(
                        <Link className='card' key={movie.id} to={`/movies/${movie.id}`} >
                        {
                            movie.poster_path === null ? 
                            <figure>
                                <Image src={`https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-300x300.jpg`}/>
                                <figcaption>  Popularity : {movie.popularity}⭐⭐⭐ </figcaption>
                            </figure> :               
                            <figure className='figurefx pushup'>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}className='img' alt=''/>
                                <figcaption>  Popularity : {movie.popularity}%⭐⭐⭐ </figcaption>
                            </figure>
                        }
                            <p>{movie.original_title}</p>
                        </Link>
                    ))}
                   
                </StyledMovie> 
            </Wrapper>

    )
}

export default Movie