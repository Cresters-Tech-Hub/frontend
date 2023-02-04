import React from 'react'
import './style.scss'
import clsx from "classnames";
import { Keys } from '../../utils/constants';

interface TypographyProps{
    text:string;
    variant?:string;
    style?:React.CSSProperties;
    component?:Keys;
    className?:string;
    state?:string;
    props?:any[];
}

const Typography = ({variant, component, style, state, text, className, ...props}:TypographyProps) => {

    const baseClass = `typography_${variant}`;
    const stateClass = `typography_${state}`;

    const typoClass = clsx('typography_default', baseClass, stateClass, className)

   const Component= component ? component : "p";
  return (
    <Component className={typoClass} {...props} style={style}>
      {text}
    </Component>
  )
}

export default Typography
