import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./navtabs.css"
export default function NavTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        className='tabsd'
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Manage SKU" style={{color: "black",fontFamily:"calibri"}}/>
        <Tab value="two" label="Create Grouping" style={{color: "black",fontFamily:"calibri"}}/>
        <Tab value="three" label="Manage Grouping" style={{color: "black",fontFamily:"calibri"}} />
        <Tab value="four" label="Disc Product" style={{color: "black",fontFamily:"calibri"}}/>
        <Tab value="five" label="Custom SKU" style={{color: "black",fontFamily:"calibri"}}/>
        <Tab value="six" label="Vendors SKU" style={{color: "black",fontFamily:"calibri"}} />
        <Tab value="seven" label="Source Route" style={{color: "black",fontFamily:"calibri"}}/>
      </Tabs>
    </Box>
  );
}
