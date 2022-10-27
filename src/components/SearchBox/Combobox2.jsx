import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = () => [
   { title: 'Київ' },
   { title: 'Львів' },
   { title: 'Івано-Франківськ' },
   { title: 'Тернопіль' },
   { title: 'Луцьк' },
   { title: 'Харків' },
   { title: 'Одеса' },
   { title: 'Рівне' },
   { title: 'Дніпро' },
   { title: 'Ужгород' },
   { title: 'Чернівці' },
   { title: 'Хмельницький' },
   { title: 'Вінниця' },
   { title: 'Запоріжжя' },
   { title: 'Кривий Ріг' },
   { title: 'Миколаїв' },
   { title: 'Херсон' },
   { title: 'Полтава' },
   { title: 'Чернігів' },
   { title: 'Черкаси' },
   { title: 'Житомир' },
   { title: 'Суми' },
   { title: 'Кропивницький' },
   { title: 'Маріуполь' },
   { title: 'Усі міста України' },


];

export default function Highlights() {
   return (
      <Autocomplete
         id="highlights-demo"
         sx={{ width: 300 }}
         options={top100Films()}
         getOptionLabel={(option) => option.title}
         renderInput={(params) => (
            <TextField {...params} label="Оберіть місто" margin="normal" />
         )}
         renderOption={(props, option, { inputValue }) => {
            const matches = match(option.title, inputValue, { insideWords: true });
            const parts = parse(option.title, matches);

            return (
               <li {...props}>
                  <div>
                     {parts.map((part, index) => (
                        <span
                           key={index}
                           style={{
                              fontWeight: part.highlight ? 700 : 400,
                           }}
                        >
                           {part.text}
                        </span>
                     ))}
                  </div>
               </li>
            );
         }}
      />
   );
}
