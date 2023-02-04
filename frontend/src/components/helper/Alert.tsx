import { Alert, AlertColor, Stack } from '@mui/material';
import React from 'react';

interface AlertBooxProps{
    text:string
    type:AlertColor | undefined
}

const style = {
    background: "#F1F4F9",
    border: "1px solid #3784FB",
    borderRadius: "12px",
    width:'403px',
    height: "83px",
}

export default function AlertBox({text, type}:AlertBooxProps) {
  return (
    <Stack sx={{ width:{xs: '303', sm:'523px' }, textAlign:{xs:'left'}}} >
    <Alert severity={type || "info"} sx={{style}}>{text}</Alert>
    </Stack>
  );
}
