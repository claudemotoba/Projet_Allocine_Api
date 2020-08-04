import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import StyledMenu from './Menu.styled'


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <StyledMenu>
      <Menu secondary>
        <Menu.Item
          style={{color:'#ffffff'}}
          name='HOME'
          href='/'
          active={activeItem === 'HOME'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          style={{color:'#ffffff'}}
          name='MOVIES'
          href='/movies'
          active={activeItem === 'MOVIES'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          style={{color:'#ffffff'}}
          name='ABOUT  US'
          active={activeItem === 'ABOUT  US'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
            style={{color:'#ffffff'}}
            name='CONTACT'
            active={activeItem === 'CONTACT'}
            onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </StyledMenu>
    )
  }
}