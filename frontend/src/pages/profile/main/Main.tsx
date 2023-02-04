import React from 'react'
import { Outlet } from 'react-router-dom'
import './main.scss'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box } from '@mui/material'
import PersonalDetails from '../../personaldetails'
import Documents from '../../documents'

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

export default function Main() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="profile_main">
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            className="tabs_container"
          >
            <Tab label="Personal Details" {...a11yProps(0)} />
            <Tab label="Document" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <PersonalDetails />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Documents />
        </TabPanel>
      </Box>
      <Outlet />
    </div>
  )
}
