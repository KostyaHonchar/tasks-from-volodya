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
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categoryWithOptions()}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Оберіть категорію" />}
    />
  );
}





