import React, { useState, useEffect } from 'react'
import { Input, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper'

import StyledSearch from './Search.styled'

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
            <StyledSearch>
                <Menu.Menu position='right'>
                    <h1>Write the name of a movie</h1>
                    <form onSubmit={submitFunction}>
                        <input icon='search' placeholder='Search...' onChange={ e => setSearch(e.target.value.toLowerCase()) }/>
                    </form>
                    <br></br>
                </Menu.Menu>
                {searchMovies.map(movie =>(
                    <Link id='film' key={movie.id} to='#'>
                        <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                        <h3>{movie.title}</h3>
                    </Link>
                ))}
            </StyledSearch>
        </Wrapper>
    )
}

export default Search