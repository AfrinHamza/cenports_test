import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import './iconlabelbuttons.css'

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='delete' variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
    </Stack>
    
  );
}
