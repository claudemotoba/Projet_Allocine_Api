import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios'
import Users from './Users'
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

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async ()=>{
            const movie = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}&callback=test`)
            console.log(movie.data);
            
            setMovies(movie.data)
   
           })();
    },[])

    return (
        <StyledSlider>
       
            <Slider {...settings}>
                {Users.map((user, i)=>(
                    <Link className='card' key={i} to=''>
                        <Image src={user.image} />
                        <h2>{user.nom}</h2>
                    </Link>
                ))}
            </Slider>
        </StyledSlider>
    )
}
export default SimpleSlider;