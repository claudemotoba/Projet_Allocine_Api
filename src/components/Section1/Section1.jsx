import React from 'react'
import Buton from './Buton/Buton'
import Text from './Text/Text'
import styled from 'styled-components'

import Video from '../../video/Avengers.mp4'

const StyledVideo = styled.video`
    position: absolute;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    z-index: -1
`

const StyledSection1 = styled.div`
    height: 50vh;
    margin-top: 0;

@media only screen and (max-width: 900px) {
  /* For mobile phones: */
  padding-top: 40px;
  height:50vh;
  h1{
      font-size: 22px;
      padding-top: 0;
      font-weight: 400;
  }
  .button{
    margin-left:0; 
  }
}
`
const Section1 = () =>{
    return(
        <StyledSection1>
            <StyledVideo autoPlay loop muted>
                <source  src={Video} type='video/mp4'/>
            </StyledVideo>
            <Text/>
            <Buton className='button'/>
            
        </StyledSection1>
    )
}


export default Section1