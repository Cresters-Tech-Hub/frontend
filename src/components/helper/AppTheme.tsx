import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material';

interface AppThemeProp{
  children: React.ReactNode
}

export const theme = createTheme({
  
})

export default function AppTheme({children}:AppThemeProp) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

