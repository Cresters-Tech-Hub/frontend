import React from 'react'
import './style.scss'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import clsx from 'classnames';


interface FormCompProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  startIcon?: string
  passwordIcon?: boolean
  name?:string
  placeholder?:string
  type?:string
  error?:boolean
  handleHidePassword? :React.MouseEventHandler<SVGElement> | undefined
  hidePassword?:boolean
  value?: string | undefined
  style?:React.CSSProperties
  helperText?:string | null
}

export default function Input({
  value,
  startIcon,
  onBlur,
  onChange,
  placeholder,
  type,
  hidePassword,
  handleHidePassword,
  name,
  passwordIcon,
  style,
  error,
  helperText,
  ...rest
}: FormCompProps) {

    const formClasses = clsx('form_username', `${error ? 'error' : null}`);

  return (
    <div className="form" {...rest} style={style}>
      <div className={formClasses}>
       {
        startIcon && <img src={startIcon} alt="" width='16.62px' height='16.67px'/>
       } 
        <input
          type={type || "text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {
            passwordIcon &&  <i>
            {hidePassword ? (
              <AiOutlineEye onClick={handleHidePassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={handleHidePassword} />
            )}
          </i>
        }
        
      </div>
      <div className="helperErrorText">
        {helperText}
      </div>
    </div>
  )
}
