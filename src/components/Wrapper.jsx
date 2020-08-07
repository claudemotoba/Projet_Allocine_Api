import React from 'react'
import Burger from './Burger/Burger'
import Footer from './Footer/Footer'

const Wrapper = ({ children }) => {
    return(
        <div>
            <Burger/>
            <br />
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default Wrapper;