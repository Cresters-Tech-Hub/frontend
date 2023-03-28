import React from 'react'
import "./customcheckbox.scss"
import Checkbox from '@mui/material/Checkbox';

interface Props{
    onChange?:(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
    onCheck?: React.MouseEventHandler<HTMLButtonElement> | undefined
    name?:string
    value?: string | number
    check:boolean
}

const CustomCheckBox = ({name, onChange, onCheck, value, check}:Props) => {
    const label = { inputProps: { 'aria-label': name } };
  return (
    <div>
       <Checkbox
        {...label}
        checked={check}
        onChange={onChange}
        sx={{
          color: '#06c149',
          '&.Mui-checked': {
            color: '#06c149',
          },
        }}
      />
    </div>
  )
}

export default CustomCheckBox
