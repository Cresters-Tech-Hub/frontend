import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Account from './Account'
import Preference from './Preference'
import Security from './Security'
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import DeliveryAgentAccount from './DeliveryAgentAccount'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Settings = () => {
  const {data:{role}} = useSelector((state:RootState)=>state.user)

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }


  if(role?.toLowerCase() === "vendor"){
     return (
      <div className="profile_main">
      <div className="checkout_title">Settings</div>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            className="tabs_container"
          >
            <Tab label="Account" {...a11yProps(0)} sx={{fontSize:"13px", color:"black"}}/>
            <Tab label="Preferences" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
            <Tab label="Security" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Account/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Preference/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Security/>
        </TabPanel>
      </Box>
      <Outlet />
    </div>
    )
  }
  if(role?.toLowerCase() ==="delivery agent" ){
    return (
     <div className="profile_main">
     <div className="checkout_title">Settings</div>
     <Box sx={{ width: '100%' }}>
       <Box>
         <Tabs
           value={value}
           onChange={handleChange}
           aria-label="basic tabs"
           className="tabs_container"
         >
           <Tab label="Account" {...a11yProps(0)} sx={{fontSize:"13px", color:"black"}}/>
           <Tab label="Preferences" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
           <Tab label="Security" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
         </Tabs>
       </Box>
       <TabPanel value={value} index={0}>
         <DeliveryAgentAccount/>
       </TabPanel>
       <TabPanel value={value} index={1}>
         <Preference/>
       </TabPanel>
       <TabPanel value={value} index={2}>
         <Security/>
       </TabPanel>
     </Box>
     <Outlet />
   </div>
   )
 }
  return (
    <div className="profile_main">
    <div className="checkout_title">Settings</div>
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          className="tabs_container"
        >
          <Tab label="Preferences" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
          <Tab label="Security" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Preference/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Security/>
      </TabPanel>
    </Box>
    <Outlet />
  </div>
  )
}

export default Settings
