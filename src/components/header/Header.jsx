import React from 'react';
import './Header.css';

function Header() {
   return (
      <section >
         <section className='header'>
            <a href="/" className='header-logo'>GIRKO</a>
            <a href="/photographs" className='header-lists'>Фотографи</a>
            <a href="/videomakers" className='header-lists'>Відеооператори</a>
            <a href="/musicians" className='header-lists'>Музиканти</a>
            <a href="/musicians" className='header-lists'>Ведучі</a>
            <a href="/musicians" className='header-lists'>Ресторани</a>
            <a href="/login" className='header-login'>ВХІД</a>
            <a href="/register" className='header-registration'>РЕЄСТРАЦІЯ</a>
         </section>
      </section>
)}

export default Header;