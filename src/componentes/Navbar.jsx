import React from 'react'
import '../estilos/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div id='Navbar'>
        <span>Where in the world?</span>
        <span id='BotonTema'><FontAwesomeIcon icon={faMoon} /> Theme</span>
    </div>
  )
}

export default Navbar