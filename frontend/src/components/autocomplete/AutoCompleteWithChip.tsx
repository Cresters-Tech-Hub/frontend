import React, {useState} from 'react';
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import "./style.scss"
import { makeStyles } from '@mui/styles';
import { Chip } from '@mui/material';


const useStyles = makeStyles({
  root: {
    borderRadius:"44px",
    outline:"none",
    '& .MuiAutocomplete-root': {
     borderRadius:"44px",
     outline:"none",
     border:"none"
    },
    '& .MuiFormControl-root': {
     borderRadius:"44px",
     outline:"none",
     border:"none"
    },
    '& .MuiAutocomplete-inputFocused': {
     borderRadius:"44px",
     outline:"none",
     border:"none"
    },
    '& .MuiAutocomplete-inputRoot': {
     borderRadius:"44px",
     outline:"none",
     border:"none"
    },
    '& .MuiAutocomplete-tag': {
      color:"#fff"
    },

  },
});

type IData={title:string, value:string|number}

interface Props{
  data:Array<string>
  onChange?: ((event: React.SyntheticEvent<Element, Event>, value: string[], reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<string> | undefined) => void) | undefined
  selectedOptions:string[],
  name?:string
}
type Idata={title:string, value:string}[]

export default function AutoCompleteWithChip({data, onChange, selectedOptions, name}:Props) {

  const classes = useStyles();

  return (
    <Autocomplete
    multiple
    id="tags-outlined"
    options={data}
    value={selectedOptions}
    getOptionLabel={(option) => option}
    onChange={onChange}
    filterSelectedOptions
    className={classes.root}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          label={option}
          sx={{color:option.toLowerCase(), bgcolor:option.toLowerCase()}}
          {...getTagProps({ index })}
        />
      ))
    }
    renderInput={(params) => (
      <TextField
      name={name}
        {...params}
        variant="outlined"
        label="Colors"
      />
    )}
  />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
