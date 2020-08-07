import React from 'react'

import Wrapper from '../../components/Wrapper'
import { Image } from 'semantic-ui-react'
import Img from '../../images/font.png'
import StyledDetails from './Details.styled'

const Details = () =>{
    return(
        <Wrapper>
            <br></br>
            <br></br>
            <StyledDetails>
                <div>
                    <Image src={Img} className='image'/> 
                </div>
                <div className='content'>
                    <h1>Titre: Fast and Furious 7</h1>
                    <h3>Synopsys: </h3>
                    <p>A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.</p>
                    <h3>Realisator:</h3> <p>Stev MCqueen</p>
                    <h3>Actors:</h3>
                    <p>Vin Diesel, Chris Hemsworth, Tom Holland</p>
                    <h4>Year:</h4>
                    <p>2020</p>
                    <h4>Box-office:</h4>
                    <p>2.504.367.000$</p>
                </div>
            </StyledDetails>
            <br></br>
        </Wrapper>
    )
}

export default Details;