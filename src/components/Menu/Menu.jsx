import React from 'react'
import { Menu } from 'semantic-ui-react'
import StyledMenu from './Menu.styled'
import styled from 'styled-components'

const StyledGenerale = styled.div`
  
  @media only screen and (max-width: 900px) {
    .menu{
      position: absolute;
    }
  }
`


const Header = ({ open }) => {

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
              name='SEARCH'
              href='/search'
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
          <Menu.Item
              style={{color:'#ffffff'}}
              name='ABOUT  US'
              href='/about-us/'
              // active={activeItem === 'ABOUT  US'}
              // onClick={this.handleItemClick}
          />
          
          </StyledMenu>
        </Menu>
      
      </StyledGenerale>
    )
}


export default  Header;