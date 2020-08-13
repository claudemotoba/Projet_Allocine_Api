import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Menu, Input } from 'semantic-ui-react'
import StyledMenu from './Menu.styled'

const StyledGenerale = styled.div`
  
  @media only screen and (max-width: 900px) {
    .menu{
      position: absolute;
    }
  }
`


const Header = ({ open }) => {

    const [search, setSearch] = useState([]);
    const history = useHistory()

    const submitFunction = (e, search)=>{
          console.log(search);
          history.push(`/search/${search}`)
          
  }

    return (
      <StyledGenerale>
        <Menu secondary className='menu'>
        <StyledMenu open={open}>
        
          <Menu.Item
            style={{color:'#ffffff'}}
            name='HOME'
            href='/'
            // active={activeItem === 'HOME'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            style={{color:'#ffffff'}}
            name='MOVIES'
            href='/movies'
            // active={activeItem === 'MOVIES'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
              style={{color:'#ffffff'}}
              name='TV SHOWS'
              href='#'
              // active={activeItem === 'CONTACT'}
              // onClick={this.handleItemClick}
          />
          <Menu.Item
              style={{color:'#ffffff'}}
              name='ABOUT US'
              href='#'
              // active={activeItem === 'CONTACT'}
              // onClick={this.handleItemClick}
          />
          <Menu.Item
              style={{color:'#ffffff'}}
              name='NEWS'
              href='#'
              // active={activeItem === 'CONTACT'}
              // onClick={this.handleItemClick}
          />
          <form onSubmit={(e)=> submitFunction(e, search)}>
            <Input icon='search' className='input' placeholder='Search...' onChange={ e => setSearch(e.target.value)}/>
          </form>
          </StyledMenu>
        </Menu>
      
      </StyledGenerale>
    )
}


export default  Header;