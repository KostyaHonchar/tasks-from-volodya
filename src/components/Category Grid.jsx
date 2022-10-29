import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CategoryGridImage1 from "./files/category-grid-image1.jpg";
import CategoryGridImage2 from "./files/category-grid-image2.jpg";
import CategoryGridImage3 from "./files/category-grid-image3.jpg";
import CategoryGridImage4 from "./files/category-grid-image4.jpg";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(0.5),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <Box>
            <Grid container spacing={2}>
               <Grid xs>
                  <Item>Фотографи</Item>
                  <img src={CategoryGridImage1} alt="Logo" className="category-grid-image" />
                  <hr></hr>
                  <div>

                     <a href='/'>Анна Андріюк</a>
                  </div>

                  <hr></hr>
                  <Item>Фотографи</Item>
               </Grid>
               <Grid xs>
                  <Item>Відеооператори</Item>
                  <img src={CategoryGridImage2} alt="Logo" className="category-grid-image" />
               </Grid>
               <Grid xs>
                  <Item>Музиканти</Item>
                  <img src={CategoryGridImage3} alt="Logo" className="category-grid-image" />
               </Grid>
               <Grid xs>
                  <Item>Ведучі</Item>
                  <img src={CategoryGridImage4} alt="Logo" className="category-grid-image" />
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}
