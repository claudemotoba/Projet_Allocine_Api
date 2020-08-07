import React from 'react'
import Buton from './Buton/Buton'
import Text from './Text/Text'
import styled from 'styled-components'

import Img from '../../images/font.png'

const StyledSection1 = styled.div`
    background-image: url(${Img});
    height: 50vh;
    margin-top: 0;

@media only screen and (max-width: 900px) {
  /* For mobile phones: */
  height:30%;
  background-size: 100%;
  background-repeat: no-repeat;
  h1{
      font-size: 22px;
      padding-top: 0;
  }
  .button{
    margin-left:0; 
  }
}
`

const Section1 = () =>{
    return(
        <StyledSection1>
            <Text/>
            <Buton className='button'/>
        </StyledSection1>
    )
}

export default Section1