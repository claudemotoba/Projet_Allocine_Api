import React from 'react'
import { Link } from 'react-router-dom'

import StyledButon from './Button.styled'

const ButtonExampleInverted = () => (
    <StyledButon>
      <Link className="ui inverted button" to='/movies'>See the list of movies</Link>
    </StyledButon>
)

export default ButtonExampleInverted