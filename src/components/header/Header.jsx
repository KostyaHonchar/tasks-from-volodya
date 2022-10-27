import { Box } from '@mui/material';
import React from 'react';
import { palette } from '@mui/system';



function Header() {
   return (
      <Box>
         <Box sx={{ display: 'flex', justifyContent: "flex-start", fontSize: '14px', p: '11px', bgcolor: '#fff' ,border: '1px solid black'}}>
            <a href="/" className='header-logo'>GIRKO</a>
            <a href="/photographs" className='header-lists'>Фотографи</a>
            <a href="/videomakers" className='header-lists'>Відеооператори</a>
            <a href="/musicians" className='header-lists'>Музиканти</a>
            <a href="/musicians" className='header-lists'>Ведучі</a>
            <a href="/musicians" className='header-lists'>Ресторани</a>
         </Box>
         <Box sx={{ display: 'flex', justifyContent: "flex-end", fontSize: '14px', p: '10px', bgcolor: '#fff', border: '1px solid black',pb:'-10px',zIndex:'-20'}}>
            <a href="/login" className='header-login'>ВХІД</a>
            <a href="/register" className='header-registration'>РЕЄСТРАЦІЯ</a>
         </Box>
      </Box>
   )
}

export default Header;