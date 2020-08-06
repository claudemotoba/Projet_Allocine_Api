import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import StyledMenu from './Menu.styled'


const Header = ({ searchFucntion }) => {

    return (
      <StyledMenu>
      <Menu secondary>
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
          name='ABOUT  US'
          href='/about-us'
          // active={activeItem === 'ABOUT  US'}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
            style={{color:'#ffffff'}}
            name='CONTACT'
            // active={activeItem === 'CONTACT'}
            // onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <input icon='search' placeholder='Search...' onChange={searchFucntion}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </StyledMenu>
    )
}

export default  Header;