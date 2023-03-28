import { Radio } from '@mui/material'
import React from 'react'

interface Props{
    selectedValue:string
    option:string
    onSelect:(event: React.ChangeEvent<HTMLInputElement>, checked: boolean)=>void
}

const RadionBtn = ({selectedValue, onSelect, option}:Props) => {
   
    const controlProps = () => ({
        checked: selectedValue === option,
        onChange: onSelect,
        value: option,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': option },
      });
  return <Radio
  {...controlProps()}
  sx={{
    color: selectedValue === option ? "#06c149" : "#CCCCCC",
    '&.Mui-checked': {
      color: "#06c149",
    },
  }}
/>

}

export default RadionBtn
