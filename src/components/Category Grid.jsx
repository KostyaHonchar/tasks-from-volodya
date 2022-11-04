import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CategoryGridImage1 from "./files/category-grid-image1.jpg";
import CategoryGridImage2 from "./files/category-grid-image2.jpg";
import CategoryGridImage3 from "./files/category-grid-image3.jpg";
import CategoryGridImage4 from "./files/category-grid-image4.jpg";



export default function ImgMediaCard() {
   return (
      <Card>
         {/* CARD 1 */}
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               alt="photography"
               height="140"
               image={CategoryGridImage1}
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Фотографи
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">
                  <CardMedia
                     component="img"
                     alt="photo1"
                     height="50px"

                  />
                  <Link>
                     <Typography>
                        Сергій Штай
                     </Typography>
                     <Typography>
                        Львів,Тернопіль,Івано-Франківськ,Чернівці
                     </Typography>
                  </Link>
               </Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
         {/* CARD 2 */}
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Відеооператори
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
         {/* CARD 3 */}
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Lizard
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
         {/* CARD 4 */}
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               alt="green iguana"
               height="140"
               image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Lizard
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <Button size="small">Learn More</Button>
            </CardActions>
         </Card>
      </Card>
   );
}


