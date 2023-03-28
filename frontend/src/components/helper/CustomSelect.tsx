import React from 'react'
import Select, {
  ActionMeta,
  GroupBase,
  PropsValue,
  StylesConfig,
} from 'react-select'
import { SelectComponents } from 'react-select/dist/declarations/src/components'

export interface OptionsProps {
  value: string
  label: string
}

interface CustomSelectProps {
  option: OptionsProps[]
  closeMenuOnSelect?: boolean
  placeholder?: string
  multi?: boolean
  className: string
  components?:
    | Partial<SelectComponents<OptionsProps, boolean, GroupBase<OptionsProps>>>
    | undefined
  isClearable?: boolean
  hideSelectedOptions?: boolean
  value?: PropsValue<OptionsProps> | undefined
  onChange?: (newValue: any, actionMeta: ActionMeta<any>) => void
}

const customStyles: StylesConfig<OptionsProps> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    height: '56px',
    border: '1px solid #E4E7F1',
    padding: '5px 10px',
    borderRadius: '24px',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    background: isSelected
      ? '#06C149'
      : '#fff'
      ? isFocused
        ? '#E6F9ED'
        : '#fff'
      : '#fff',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  }),
}

export default function CustomSelect({
  option,
  closeMenuOnSelect,
  multi,
  placeholder,
  isClearable,
  components,
  value,
  onChange,
  className,
  hideSelectedOptions,
}: CustomSelectProps) {
  return (
    <Select
      options={option}
      isMulti={multi}
      value={value}
      closeMenuOnSelect={closeMenuOnSelect}
      placeholder={placeholder}
      isClearable={isClearable}
      styles={customStyles}
      components={components}
      onChange={onChange}
      className={className}
      hideSelectedOptions={hideSelectedOptions}
    />
  )
}
