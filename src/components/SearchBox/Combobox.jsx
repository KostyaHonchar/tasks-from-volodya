import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const categoryWithOptions = () => [
  { label: 'Фотографи' },
  { label: 'Відеооператори' },
  { label: 'Ведучі' },
  { label: 'Ресторани' },
  { label: 'Оформлення залу' },
  { label: 'Сукні для дружок' },
  { label: 'Весільні сукні' },
  { label: 'Торти та короваї' },
  { label: 'Автомобілі' },
  { label: 'Організація весілля' },
  { label: 'Шоу-програма' },
  { label: 'Салони краси' },
  { label: 'Запрошення та аксесуари' },
  { label: 'Перший танець' },
  { label: 'Фуршетний стіл' },
  { label: 'Весільні букети' },


];




export default function ComboBox() {
  return (
    <div className='searchbox-box'>
      <span className='span-searchbox'>Категорія
        <Autocomplete
          className='combo-box-demo-class'
          disablePortal
          id="combo-box-demo"
          options={categoryWithOptions()}
          sx={{ width: 250, height: "100%", bgcolor: "#fff", borderRadius: "3px ", color: "#999", mt: "10px" }}
          renderInput={(params) => <TextField sx={{}} {...params} label="Оберіть категорію" />}
        />
      </span>
    </div>
  );
}





