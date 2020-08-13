import React, { useState, useEffect } from 'react'
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


const Header = ({ open, soumissionForm, }) => {

    const [search, setSearch] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);

    const submitFunction = (e)=>{
      e.preventDefault()
      
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ea7ac90e55beb953ffcdb03733ccf92&query=${search}`)
          .then(data => data.json())
          .then(data => {
              console.log(data);
              setSearchMovies(data.results)
          })
         
              // console.log(searchMovie.data);
          
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
          <form onSubmit={submitFunction}>
            <input icon='search' placeholder='Search...' onChange={ e => setSearch(e.target.value)}/>
          </form>
          </StyledMenu>
        </Menu>
      
      </StyledGenerale>
    )
}


export default  Header;