import React from 'react'
import "./sidebar.css"
import SpeedIcon from '@mui/icons-material/Speed';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <SpeedIcon className="siderbarIcon"/> Overview
                    </li> 
                    <li className='sidebarListItem'>
                        <DehazeIcon  className="siderbarIcon"/> Fullfillment Master
                    </li> 
                    <li className='sidebarListItem'>
                        <ShoppingCartIcon  className="siderbarIcon"/>  Sales Order
                    </li> 
                    <li className='sidebarListItem'>
                        <SettingsSuggestIcon  className="siderbarIcon"/>   Vendor Channels
                    </li> 
                    <li className='sidebarListItem'>
                        <ConnectingAirportsIcon  className="siderbarIcon"/>  Suppliers
                    </li> 
                    <li className='sidebarListItem'>
                        <HouseSidingIcon  className="siderbarIcon"/>Inventory
                    </li> 

                    <li className='sidebarListItem'>
                        <ReceiptIcon  className="siderbarIcon"/>Invoice
                    </li> 
                    <li className='sidebarListItem'>
                        <CategoryIcon  className="siderbarIcon"/>Products
                    </li> 
                    <li className='sidebarListItem'>
                        <AddBusinessIcon  className="siderbarIcon"/>Vendors
                    </li> 
                    <li className='sidebarListItem'>
                        <AutoStoriesIcon  className="siderbarIcon"/>Catalog
                    </li> 

                    <li className='sidebarListItem'>
                        <HandshakeIcon  className="siderbarIcon"/>onboard
                    </li> 
                    <li className='sidebarListItem'>
                        <DescriptionIcon  className="siderbarIcon"/>Retailer invoice
                    </li> 
                    <li className='sidebarListItem'>
                        <ArticleIcon  className="siderbarIcon"/>Reports
                    </li> 
                    <li className='sidebarListItem'>
                        <LocalOfferIcon  className="siderbarIcon"/>Pricing
                    </li> 
                    <li className='sidebarListItem'>
                        <SettingsIcon  className="siderbarIcon"/>Settings
                    </li> 
                    <li className='sidebarListItem'>
                        <WorkHistoryIcon  className="siderbarIcon"/>Carriers
                    </li> 
                    <li className='sidebarListItem'>
                        <GroupIcon  className="siderbarIcon"/>User Management
                    </li> 

                   
                </ul>
            </div>
        </div>
    </div>
  )
}

