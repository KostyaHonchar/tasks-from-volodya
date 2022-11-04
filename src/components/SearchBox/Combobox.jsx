import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ title, data, label }) {
  return (
    <div className='searchbox-box'>
      <span className='span-searchbox'>{title}</span>
        <Autocomplete
          className='combo-box-demo-class'
          disablePortal
          options={data}
          size="small"
          sx={{ width: 250, height: "100%", bgcolor: "#fff", borderRadius: "3px ", color: "#999", mt: "10px" }}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
    </div>
  );
}





