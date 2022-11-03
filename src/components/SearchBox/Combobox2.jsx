
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const cityOptions = () => [
   { label: 'Київ' },
   { label: 'Львів' },
   { label: 'Івано-Франківськ' },
   { label: 'Тернопіль' },
   { label: 'Луцьк' },
   { label: 'Харків' },
   { label: 'Одеса' },
   { label: 'Рівне' },
   { label: 'Дніпро' },
   { label: 'Ужгород' },
   { label: 'Чернівці' },
   { label: 'Хмельницький' },
   { label: 'Вінниця' },
   { label: 'Запоріжжя' },
   { label: 'Кривий Ріг' },
   { label: 'Миколаїв' },
   { label: 'Херсон' },
   { label: 'Полтава' },
   { label: 'Чернігів' },
   { label: 'Черкаси' },
   { label: 'Житомир' },
   { label: 'Суми' },
   { label: 'Кропивницький' },
   { label: 'Маріуполь' },
   { label: 'Усі міста України' },


];
export default function ComboBox() {
   return (
      <div>
         <span className='span-searchbox'>Місто
            <Autocomplete
               disablePortal
               id="combo-box-demo2"
               options={cityOptions()}
               sx={{ width: 250, height: "100 %", bgcolor: "#fff", borderRadius: "3px ", color: "#999", mt: "10px" }}
               renderInput={(params) => <TextField {...params} label="Оберіть категорію" />}
            />
         </span>
      </div>
   );
}




