import { Checkbox } from '@mui/material'
import React from 'react'

interface ICheckBox {
  onCheck?: React.MouseEventHandler<HTMLButtonElement> | undefined
  value?: string | number
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  size?: 'medium' | 'small'
  name?:string
  sx?: React.CSSProperties
  className?:string
  onChange?:React.ChangeEvent<HTMLInputElement>
}

export default function CheckBox({
  onCheck,
  sx,
  value,
  size,
  color,
  className,
  name,
}: ICheckBox) {
  return (
    <>
      <Checkbox
        aria-label="Checkbox"
        sx={sx}
        size={size}
        color={color}
        value={value}
        onClick={onCheck}
        className={className}
        name={name}
      />
    </>
  )
}
