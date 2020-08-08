import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'
import styled from 'styled-components'

import StyledSearch from './Search.styled'

const StyledHeader = styled.div`
    form{
        margin-left: 40%;
    }
    input{
        height: 40px;
        width: 250px;
    }
    h1{
        margin-top: 50px;
        text-align: center;
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
    const [search, setSearch] = useState([]);

    const submitFunction = (e)=>{
        e.preventDefault()
        
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ea7ac90e55beb953ffcdb03733ccf92&query=${search}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setSearchMovies(data.results)
            })
           
                // console.log(searchMovie.data);
            
    }

    return(
        <Wrapper>
            <StyledHeader>
                    <h1>Write the name of a movie</h1>
                    <form onSubmit={submitFunction}>
                        <input icon='search' placeholder='Search...' onChange={ e => setSearch(e.target.value) }/>
                    </form>
                    <br></br>
            </StyledHeader>
            <StyledSearch>
                {searchMovies.map(movie =>(
                    <Link className='search' key={movie.id} to={`/movies/${movie.id}`}>
                    {
                        movie.backdrop_path === null ? <Image src={`https://image.freepik.com/photos-gratuite/texture-pierre-noire-vue-dessus_88281-3900.jpg`}/> : <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                    }
                        
                        <h3>{movie.title}</h3>
                    </Link>
                ))}
            </StyledSearch>
        </Wrapper>
    )
}

export default Search