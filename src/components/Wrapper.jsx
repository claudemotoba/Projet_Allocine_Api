import React from 'react'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'

const Wrapper = ({ children }) => {
    return(
        <div>
            <div>
            <Menu />
            </div>
            <br />
            <br />
            <br />
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default Wrapper;