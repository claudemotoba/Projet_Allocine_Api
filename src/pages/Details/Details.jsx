import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Skeleton, Bone }  from 'react-loading-skeleton-placeholders'

import Wrapper from '../../components/Wrapper'
import { Image } from 'semantic-ui-react'
import StyledDetails from './Details.styled'
import Img  from '../../images/tt.jpg'

import axios from 'axios'
import SimilarMovie from '../../components/SimilarMovies/SimilarMovies'

const styledSim = styled.div`
    h1{
        margin-left: 3.5%;
    }
`

const Details = (props) =>{

    const [movie, setMovie] = useState({});
    // const [a, setA] = useState([]);
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
            <StyledDetails style={{backgroundImage:`url(${Img})`}}>
                <div className='img'>
                    {
                        movie.poster_path === null ? <Image src={`https://image.freepik.com/photos-gratuite/texture-pierre-noire-vue-dessus_88281-3900.jpg`} className='image'/> : <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='image'/>
                    }
                </div>
                <div className='content'>
                    <h1>{movie.original_title || <Bone/>} </h1>
                    <p>{movie.overview} </p>
                    <p>
                        {Array.isArray(movie.genres) &&
                            movie.genres.map(mov => 
                                <span key={mov.id}>{mov.name+' ,'}</span>
                            )
                        }
                    </p>
                    <p> 
                        {movie.release_date}
                    </p>
                    <p> <span> Available in    </span> 
                        {Array.isArray(movie.spoken_languages) &&
                            movie.spoken_languages.map((lang, i) => 
                                <span key={i}>{lang.name+' ,'}</span>
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
                         {movie.revenue === 0 ? movie.revenue='no defined ': movie.revenue}$ at the Box office
                    
                    </p>
                </div>
            </StyledDetails>
            <styledSim>
                <SimilarMovie movieId={props.match.params.id}/>
            </styledSim>
        </Wrapper>
    )
}

export default Details;