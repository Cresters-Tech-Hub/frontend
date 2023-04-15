import React from 'react'
import "./style.scss"
import closeImg from '../../assets/images/add_img_close.png'
import expandImg from '../../assets/images/add_img_expand.png'

interface Props{
    file:any
    setFile: React.Dispatch<any>
}

const RenderImg = ({file, setFile}:Props) => {
 
  const handleDelete=(img:string)=>{
    let newData = file?.filter((i:string)=> i !== img)
    setFile(newData)
  }

  return (
    <div className='render_img'>
     {
        file.map((item:any, i:number)=>( 
        <div className='render_img_div'  key={i} >
        <img className='main_img' src={item} alt=''/>
        <div className='reder_img_action'>
            <img src={closeImg} alt="" onClick={()=>handleDelete(item)}/>
            <img src={expandImg} alt="" />
        </div>
        </div>
)) 
     }
    </div>
  )
}

export default RenderImg
