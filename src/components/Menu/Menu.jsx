import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import StyledMenu from './Menu.styled'


const Header = ({ searchFucntion, submitFunction }) => {

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
            href='/about-us'
            // active={activeItem === 'ABOUT  US'}
            // onClick={this.handleItemClick}
        />
      </Menu>
      </StyledMenu>
    )
}

export default  Header;