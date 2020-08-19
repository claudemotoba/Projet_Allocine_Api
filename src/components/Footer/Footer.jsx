import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from 'react-icons/fa'
import { FiMail}  from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AiOutlineYoutube } from 'react-icons/ai'
import { GrInstagram, GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'

import Img from '../../images/netflix.webp'
import StyledFooter from './Footer.styled'

const Titre = styled.h3`
    color: #CD0F0F;
    font-size: 17px;
    padding-bottom: 20px;
    /* text-align: center; */
`

const Footer = ({Lien})=>{
    return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <StyledFooter>
            <div className='Contents'>
                <div>
                    <img src={Img} alt=''/>
                </div>
                <div className='rapide_link'>
                    <Titre className='h3'>RAPIDE LINK</Titre>
                    <Link to=''>HOME</Link> <br></br>
                    <Link to=''>MOVIES</Link> <br></br>
                    <Link to=''>TV SHOWS</Link> <br></br>
                    <Link to=''>ABOUT US</Link> <br></br>
                    <Link to=''>ADVERTISING</Link>
                </div>
                <div>
                    <Titre>WHO ARE WE</Titre>
                    Netflix est une entreprise multinationale américaine créée à Scotts Valley en 1997 par Reed Hastings et Marc Randolph appartenant au secteur d'activité des industries créatives et spécialisée dans la distribution et l'exploitation d'œuvres cinématographiques et télévisuelles par le biais d'une plateforme dédiée.
                </div>
                <div className="follow">
                    <Titre>FOLLOW NETFLIX</Titre>
                    <Link to='#'><GrFacebookOption/></Link> 
                    <Link to='#'><FaTwitter/></Link> 
                    <Link to='#'><GrInstagram/></Link> <br></br>
                    <Link to='#'><GrLinkedinOption/></Link> 
                    <Link to='#'><FiMail/></Link>
                    <Link to='#'><AiOutlineYoutube/></Link> 
                </div>
                 
            </div>
            <div className='bas_de_page'>
               <p> Contact | Qui sommes-nous | Recrutement | Publicité | CGU | Politique de cookies | Préférences cookies | Données Personnelles | Jeux concours | ©AlloCiné</p>
                <p>Design by kinshasa digital academy</p>
                <p>Copyring 2020</p>
            </div>
        </StyledFooter>
        </>
    )
}

export default Footer;