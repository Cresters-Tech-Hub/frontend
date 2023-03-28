import React from 'react'
import { Outlet } from 'react-router-dom'
import './checkout.scss'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box } from '@mui/material'
import ReviewOrder from '../../../components/review-order/ReviewOrder'
import SetAddressAndPayment from '../../../components/set-payment/SetAddressAndPayment'


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

export default function Checkout() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleNextpage =()=>{
    setValue(1)
  }

  return (
    <div className="profile_main">
      <div className="checkout_title">Checkout</div>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            className="tabs_container"
          >
            <Tab label="Review Order" {...a11yProps(0)} sx={{fontSize:"13px", color:"black"}}/>
            <Tab label="Set Address & Payment" {...a11yProps(1)} sx={{fontSize:"13px",  color:"black"}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
         <ReviewOrder handleChange={handleNextpage}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
         <SetAddressAndPayment/>
        </TabPanel>
      </Box>
      <Outlet />
    </div>
  )
}
