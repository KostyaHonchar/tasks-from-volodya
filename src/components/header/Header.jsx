import { Box } from '@mui/material';
import React from 'react';
import { palette } from '@mui/system';
import logo from './components/header/logoGirko.svg'



function Header() {
   return (
      <Box className='header'>
            <img src={logo} alt='Logo'/>
            <a href="/" className='header-logo'>GIRKO</a>
            <a href="/photographs" className='header-lists'>Фотографи</a>
            <a href="/videomakers" className='header-lists'>Відеооператори</a>
            <a href="/musicians" className='header-lists'>Музиканти</a>
            <a href="/singers" className='header-lists'>Ведучі</a>
            <a href="/restaurants" className='header-lists'>Ресторани</a>
            <a href="/login" className='header-login'>ВХІД</a>
            <a href="/register" className='header-registration'>РЕЄСТРАЦІЯ</a>
         </Box>
   )
}

export default Header;