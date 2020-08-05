import React from 'react'
import Buton from './Buton/Buton'
import Text from './Text/Text'
import styled from 'styled-components'

import Img from '../../images/font.png'

const StyledSection1 = styled.div`
    background-image: url(${Img});
    height: 50vh;
    margin-top: 0;
`

const Section1 = () =>{
    return(
        <StyledSection1>
            <Text/>
            <Buton/>
        </StyledSection1>
    )
}

export default Section1