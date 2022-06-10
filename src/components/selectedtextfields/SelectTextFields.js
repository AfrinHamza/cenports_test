import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DownloadingIcon from '@mui/icons-material/Downloading';
// import { style } from '@mui/system';
import "./selectedtextfields.css"
import SearchIcon from '@mui/icons-material/Search';

export default function SelectTextFields() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <div className='Widgets'>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">$</InputLabel> 
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>

        <div className='buttond'  sx={{ width: 50}}>
        <Stack direction="row" spacing={5} className='Search' >
      <Button variant="outlined" startIcon={<SearchIcon />}></Button>
    </Stack>
    </div>

    <div className='btnnx'>

    <Stack spacing={2} direction="row" sx={{ height: 30}}>
      <Button variant="contained" startIcon={<DeleteIcon />}> Delete Batch</Button>
      <Button variant="contained" startIcon={<DownloadingIcon/>}>Import Products</Button>
      <Button variant="contained" startIcon={<AddBoxIcon/>}>Add Products</Button>
    </Stack>

   
        </div>
      
    </div>
  );
}
