import React, { useState, useEffect } from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import styled from 'styled-components'

import StyledSearch from './Search.styled'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const StyledHeader = styled.div`
    form{
        margin-left: 40%;
    }
    h1{
        margin-top: 50px;
        margin-left: 3.5%;
        color: #CD0F0F;
    }
    @media only screen and (max-width: 900px) {
        form{
            margin-left: 20%;
        }
    }
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
                    <h1>Result</h1>
                    
                    <br></br>
            </StyledHeader>
            <StyledSearch>
                {searchMovies.map(movie =>(
                    <Link className='search' key={movie.id} to={`/movies/${movie.id}`}>
                    {
                        movie.backdrop_path === null ? <Image src={`https://image.freepik.com/photos-gratuite/texture-pierre-noire-vue-dessus_88281-3900.jpg`}/> : <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                    }
                        
                        <h3>{movie.original_title}</h3>
                    </Link>
                ))}
            </StyledSearch>
        </Wrapper>
    )
}

export default Search