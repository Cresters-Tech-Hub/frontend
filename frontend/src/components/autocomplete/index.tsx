import React from 'react'
import './style.scss'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import {MenuItem, OutlinedInput} from '@mui/material';
import { IconType } from 'react-icons/lib';

interface Props{
    icon?:React.ReactElement<IconType>
    options:Array<string>
    handleChange?:(event: SelectChangeEvent<string>) => void
    handleChangeMultiple?:(event: SelectChangeEvent<any>) => void
    valueSingle?:any
    valueMultiple?:Array<any>
    multi?:boolean
    name?:string
    helperText?:string | null
}

const CustomAutoComplete = ({icon,options, handleChange, valueMultiple, valueSingle, handleChangeMultiple, multi, name, helperText}:Props) => {

  const chengeHandler = multi ? handleChangeMultiple : handleChange;

  const value = multi ? valueMultiple : valueSingle

  return (
    <div className='customAutoComplete'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
        multiple={multi}
        sx={{
            borderRadius:"24px",
            border:helperText ? "1px solid red": ""
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={chengeHandler}
          className='select'
          startAdornment={<span style={{marginRight:"8px", marginLeft:"10px"}}>{icon}</span>}
          label={name}
          name={name}
        >
            {
                options.map((item, id)=>(
                    <MenuItem value={item} key={id}>{item}</MenuItem>
                ))
            }
        </Select>
        <div className="helperErrorText">
        {helperText}
      </div>
        </FormControl>
    </div>
  )
}

export default CustomAutoComplete
