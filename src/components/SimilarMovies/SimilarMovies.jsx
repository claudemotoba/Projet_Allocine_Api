import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import axios from 'axios'
import { Link } from 'react-router-dom'
import StyledSimilar from './SimilarMovies.styled'

const Titre = styled.h3`
    color: #CD0F0F;
`

const SimpleSlider = ({movieId}) =>{
    const api_key = '1ea7ac90e55beb953ffcdb03733ccf92'

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const [similarMovies, setsimilarMovies] = useState([]);

    useEffect(() => {
        (async ()=>{
            const simMov = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=1`)
            
            
            setsimilarMovies(simMov.data.results)
            console.log(simMov.data.results);
   
           })();
    },[])

    return (
        <StyledSimilar>
            <Titre>SIMILAR MOVIES</Titre>
            <Slider {...settings}>
                {similarMovies.map((movie, i)=>(
                    <Link className='card' key={movie.id} to={`/movies/${movie.id}`}>
                    {
                        movie.poster_path === null ? 
                        <figure className='figurefx pushup'>
                            <Image src={`https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-300x300.jpg`} className='img'/>
                            <figcaption>Popularity : {movie.popularity}⭐⭐⭐</figcaption>
                        </figure>
                         : 
                        <figure className='figurefx pushup'>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img'/>
                            <figcaption>  Popularity : {movie.popularity}⭐⭐⭐ </figcaption>
                        </figure>
                    }
                        <h3>{movie.original_title}</h3>
                    </Link>
                ))}
            </Slider>
        </StyledSimilar>
    )
}
export default SimpleSlider;
