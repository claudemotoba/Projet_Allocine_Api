import React, { useState, useEffect } from 'react'

import Wrapper from '../../components/Wrapper'
import { Image } from 'semantic-ui-react'
import StyledDetails from './Details.styled'

import axios from 'axios'
const Details = (props) =>{

    const [movie, setMovie] = useState({});
    useEffect(() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=1ea7ac90e55beb953ffcdb03733ccf92&language=en-US`
      )
        .then(res => {
          setMovie(res.data);
          console.log(res.data);
          
        })
        .catch(err => console.error(err));
    }, []);

    return(
        <Wrapper>
            <br></br>
            <br></br>
            <StyledDetails>
                <div>
                    <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className='image'/> 
                </div>
                <div className='content'>
                    <h1>{movie.original_title} </h1>
                    <p>{movie.overview} </p>
                    <p>
                        {Array.isArray(movie.genres) &&
                            movie.genres.map(mov => 
                                <span key={mov.id} className="ml-2">{mov.name+' ,'}</span>
                            )
                        }
                    </p>
                    <p>
                        {movie.release_date}
                    </p>
                    <p> <span> Available in    </span> 
                        {Array.isArray(movie.spoken_languages) &&
                            movie.spoken_languages.map((lang, i) => 
                                <span key={i} className="ml-2">{lang.name+' ,'}</span>
                            )
                        }
                    </p> 
                    <p> <span> Produced by    </span>       
                            {Array.isArray(movie.production_companies) &&
                                movie.production_companies.map((companie, i) => 
                                    <span key={i} className="ml-2">{companie.name+' ,'}</span>
                                )
                            }
                    </p>
                    <p> 
                         {movie.revenue}$ at the Box office
                    
                    </p>
                </div>
            </StyledDetails>
            <br></br>
        </Wrapper>
    )
}

export default Details;