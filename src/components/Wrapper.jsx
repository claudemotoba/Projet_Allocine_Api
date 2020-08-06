import React from 'react'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'

const Wrapper = ({ children, searchFucntion }) => {
    return(
        <div>
            <div>
                <Menu searchFucntion={searchFucntion}/>
            </div>
            <br />
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default Wrapper;