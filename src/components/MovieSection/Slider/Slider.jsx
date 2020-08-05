import React from 'react'
import Slider from "react-slick";
import { Image } from 'semantic-ui-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Users from './Users'
import StyledSlider from './Slider.styled'

const SimpleSlider = () =>{

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <StyledSlider>
       
            <Slider {...settings}>
                {Users.map((user, i)=>(
                    <div className='card'>
                        <Image src={user.image} />
                        <h2>{user.nom}</h2>
                    </div>
                ))}
            </Slider>
        </StyledSlider>
    )
}
export default SimpleSlider;