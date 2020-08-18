import React, { useState, useEffect } from 'react'
import { Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Wrapper from '../../components/Wrapper'
import styled from 'styled-components'
import StyledSearch from './Search.styled'

const StyledHeader = styled.div`
    form{
        margin-left: 40%;
    }

    @media only screen and (max-width: 900px) {
        form{
            margin-left: 20%;
        }
    }
`
const Titre = styled.h3`
    margin-top: 50px;
    margin-left: 7.5%;
    color: #CD0F0F;
`

const Search = ()=>{

    const [searchMovies, setSearchMovies] = useState([]);
    let request = useParams()

        useEffect(() => {

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ea7ac90e55beb953ffcdb03733ccf92&query=${request.query}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setSearchMovies(data.results)
            })
        },[])
        //window.location.reload();
            
    return(
        <Wrapper>
            <StyledHeader>
                    <Titre>RESULTS</Titre>

            </StyledHeader>
            <StyledSearch>
                {searchMovies.map(movie =>(
                    <Link className='card' key={movie.id} to={`/movies/${movie.id}`}>
                    {
                        movie.poster_path === null ? 
                        <figure className='figurefx pushup'>
                            <Image src={`https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-300x300.jpg`} className='img' alt=''/>
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
            </StyledSearch>
        </Wrapper>
    )
}

export default Search