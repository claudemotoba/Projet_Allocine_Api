import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 25px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 5;
    display: none;

    div{
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        transform-origin: 1px !important;
        background-color: ${ ({open})=> open ? '#DF0101' : 'white' };

        &:nth-child(1){
            transform: ${({open})=> open ? 'rotate(45deg)' : 'rotate(0)'}
        }

        &:nth-child(2){
            transform: ${({open})=> open ? 'translateX(100%)' : 'translateX(0)'};
            opacity:  ${({open})=> open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
    @media only screen and (max-width: 900px) {
      display: flex;

    }
`

const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={()=> setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <Menu open={open}/>
            
        </>
    )
}

export default Burger
