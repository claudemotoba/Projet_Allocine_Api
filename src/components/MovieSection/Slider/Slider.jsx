import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios'
import { Link } from 'react-router-dom'
import StyledSlider from './Slider.styled'

const SimpleSlider = () =>{
    const api_key = '1ea7ac90e55beb953ffcdb03733ccf92'

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        (async ()=>{
            const popularMovie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            console.log(popularMovie.data.results);
            
            setPopularMovies(popularMovie.data.results)
   
           })();
    },[])

    return (
        <StyledSlider>
       
            <Slider {...settings}>
                {popularMovies.map((movie, i)=>(
                    <Link className='card' key={movie.id} to={`/movies/${movie.id}`}>
                    {
                        movie.poster_path === null ? 
                        <figure>
                            <Image src={`https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-300x300.jpg`}/>
                            <figcaption>  Popularity : {movie.popularity}⭐⭐⭐ </figcaption>
                        </figure> : 
                        <figure className='figurefx pushup'>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img'/>
                            <figcaption>  Popularity : {movie.popularity}⭐⭐⭐ </figcaption>
                        </figure>
                    }
                        <p>{movie.original_title}</p>
                    </Link>
                ))}
            </Slider>
        </StyledSlider>
    )
}
export default SimpleSlider;