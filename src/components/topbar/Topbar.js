import React from 'react'
import "./topbar.css"
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
export default function Topbar(){
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                        <div className='logo'>cenports</div>
            </div>
                {/* <ArrowBackIosNewIcon/> */}
            
        {/* <div className='topRight' style={{align: "right"}}>
            <div className='topbarIconContainer'>
            <SearchIcon/>
            </div>  
            
        </div>
        <img src="./public/logo192.png" className="topAvatar" style={{align: "right"}}/> */}
       

        {/* <Box
            component="form"
            sx={{
                    '& > :not(style)': { m: 1, width: '10ch', height:'60px', alignItems:'right', },
                }}
                noValidate
                autoComplete="off"
                >
               
             </Box>
             <TextField id="outlined-basic" variant="outlined" /> */}

        </div>
        
    </div>
  )
}

