import React from 'react'
import logo from '../Assets/Holberton Logo.jpg'

const Header = () => {
  return (
    <header className='App-header'>
        <img src={logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
  )
}

export default Header