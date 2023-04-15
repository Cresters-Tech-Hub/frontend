import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import "./style.scss"
import clsx from 'classnames';

interface Props{
    onClick?:React.MouseEventHandler<HTMLDivElement> | undefined
    title:string|number
    width?:string
    hasBg?:boolean
}

const AddNewItemBtn = ({onClick, title, width, hasBg}:Props) => {
    const classes = clsx("addNewAddress", `${hasBg && "has_bg"}`)
  return (
    <div className={classes} style={{width:width ? width : ""}}>
    <div></div>
    <div onClick={onClick}>
        <AiOutlinePlus color={hasBg ? "#000000" : "#06c149"} />
        <span>{title}</span>
    </div>
</div>
  )
}

export default AddNewItemBtn
