import * as React from 'react';

// Icons for panel
import { SlCamera } from "react-icons/sl";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TbMicrophone2 } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";
// Photos of grid main
import CategoryGridImage1 from "./files/category-grid-image1.jpg";
import CategoryGridImage2 from "./files/category-grid-image2.jpg";
import CategoryGridImage3 from "./files/category-grid-image3.jpg";
import CategoryGridImage4 from "./files/category-grid-image4.jpg";
// Photo small in panels
import PhSm1 from "./files/panel-1-small.jpg"
import PhSm2 from "./files/panel-2-small.jpg"
import PhSm3 from "./files/panel-3-small.jpg"



export default function ImgMediaCard() {
   return (
      <div className='cards-row'>
         {/*Card 1  */}
         <div className='card-1'>
            <div className='panel-header' >
               <h3 className='panel-title'>
                  <a href='/#' className='panel-title-link'><span className='media-span'><SlCamera className='media-icon' /></span>Фотографи
                  </a>
               </h3>
               <a href="/#"><img alt='card-1' className='img-responsive' src={CategoryGridImage1} />
               </a>
            </div>
            <ul className='media-list'>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm1} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Олександр Зайцев</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm2} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Віктор Кирилюк</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm3} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Сергій Волков</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
            </ul>

         </div>
         {/* Card 2 */}
         <div className='card-1'>
            <div className='panel-header'>
               <h3 className='panel-title'>
                  <a href='/#' className='panel-title-link'><span className='media-'><VscDeviceCameraVideo className='media-icon' /></span>
                     Відеооператори</a>
               </h3>
               <a href="/#"><img alt='card-1' className='img-responsive' src={CategoryGridImage2} /></a>

            </div>
            <ul className='media-list'>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm1} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Олександр Зайцев</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm2} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Віктор Кирилюк</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm3} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Сергій Волков</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
         {/* CARD 3 */}
         <div className='card-1'>
            <div className='panel-header'>
               <h3 className='panel-title'>
                  <a href='/#' className='panel-title-link'><span className='media-span'><IoMusicalNotesOutline className='media-icon' /></span>Музиканти</a>
               </h3>
               <a href="/#"><img alt='card-1' className='img-responsive' src={CategoryGridImage3} /></a>

            </div>
            <ul className='media-list'>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm1} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Олександр Зайцев</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm2} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Віктор Кирилюк</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm3} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Сергій Волков</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
         {/* CARD 4 */}
         <div className='card-1'>
            <div className='panel-header'>
               <h3 className='panel-title'>

                  <a href='/#' className='panel-title-link'><span className='media-span'><TbMicrophone2 className='media-icon' /></span> Ведучі</a>
               </h3>
               <a href="/#"><img alt='card-1' className='img-responsive' src={CategoryGridImage4} /></a>

            </div>
            <ul className='media-list'>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm1} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Олександр Зайцев</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm2} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Віктор Кирилюк</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
               <li className='media-list-li'>
                  <a href="/#">
                     <div><img src={PhSm3} className='img-sm-round' alt="card1-media1" /></div>
                     <div className='media-body'>
                        <div>Сергій Волков</div>
                        <span className='ellipsis'><SiGooglemaps className='map-icon' />Київ, Львів, Тернопіль, Івано-Франківськ, Маріуполь</span>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}


