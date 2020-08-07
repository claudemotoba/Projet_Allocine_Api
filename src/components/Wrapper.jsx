import React from 'react'
import Burger from './Burger/Burger'
import Footer from './Footer/Footer'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    
    @media only screen and (max-width: 900px) {

    }
`

const Wrapper = ({ children }) => {
    return(
        <StyledWrapper>
            <Burger/>
            <br />
            <div>{children}</div>
            <Footer/>
        </StyledWrapper>
    )
}

export default Wrapper;