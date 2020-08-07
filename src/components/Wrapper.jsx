import React from 'react'
import Menu from './Menu/Menu'
import Burger from './Burger'
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