import React from 'react'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import UserList from '../../userList/UserList'
import "./home.css"
import NavTabs from '../../navtabs/NavTabs'
import SelectTextFields from '../../selectedtextfields/SelectTextFields'
// import IconLabelButtons from '../../iconlabelbuttons/IconLabelButtons'
// import BasicButtons from '../../basicbuttons/BasicButtons'
// import PaginationControlled from '../../paginationcontrolled/PaginationControlled'
// import { Placeholder } from 'react-bootstrap'

export default function Home (){
  return (
    <div className='home'>
      <h2 className='topic'>Manage Product</h2>
       
    <Featuredinfo/>
     <NavTabs/>
     <SelectTextFields/> 
     <UserList/>
     
     {/* <IconLabelButtons/>
     <BasicButtons/> */}
     
      {/* <PaginationControlled/> */} 
      {/* <NavTabs/>
      <button className=''> hj</button>
      <UserList/> */}

      
      
    </div>
  )
}


