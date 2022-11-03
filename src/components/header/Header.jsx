import React from 'react';


function Header() {
   return (
      <nav role='navigation'>
         <ul className='nav-1'>
            <li >
               <a href="/" className='nav-logo'>
                  <img className='logo-image' src='https://girko.net/static/new-des/images/logo.svg' alt='Logo' />
                  <span className='logo-name'>GIRKO</span>
               </a>
            </li>
         </ul>
         <ul className='nav-2'>
            <li className='nav-list'>
               <li><a href="/photographs" className='nav-element'>Фотографи</a></li>
               <li><a href="/videomakers" className='nav-element'>Відеооператори</a></li>
               <li><a href="/musicians" className='nav-element'>Музиканти</a></li>
               <li><a href="/singers" className='nav-element'>Ведучі</a></li>
               <li><a href="/restaurants" className='nav-element'>Ресторани</a></li>
            </li>
         </ul>
         <ul className='nav-3'>
            <li className='nav-login'>
               <li><a href="/login" className='nav-log'>Вхід</a></li>
               <li><a href="/register" className='nav-regist'>РЕЄСТРАЦІЯ</a></li>
            </li>
         </ul>
      </nav>
   )
}

export default Header;

