import React from 'react'
import './card.scss'
import Typography from '../typography'
import Button from './../buttons/index';
import clsx from 'classnames'


interface CardProp{
  imgUri:string;
  text:string;
  title:string
  showBtn?:boolean
  page?:number
  variant?:"md"|"lg"
  onClick?:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
interface CardPaginationProp{
  page:number
}
const CardPagination =({page}:CardPaginationProp)=>{
  if(page === 1){
    return <div className='cardPagination'>
      <span className="active_bar"></span>
      <span className="inactive_dot"></span>
      <span className="inactive_dot"></span>
    </div>
  }
  else if(page === 2){
    return  <div className='cardPagination'>
    <span className="inactive_dot"></span>
    <span className="active_bar"></span>
    <span className="inactive_dot"></span>
  </div>
  }
  return <div className='cardPagination'>
  <span className="inactive_dot"></span>
  <span className="inactive_dot"></span>
  <span className="active_bar"></span>
</div>
}

const Card = ({imgUri, text, title, page, showBtn, variant, onClick}:CardProp) => {
  const variantClass = `card_${variant}`
const cardClasses = clsx("card_default", variantClass)
  return (
    <div className={cardClasses}>
      <img src={imgUri} alt="" />
      <div className='pagination'>{page ? <CardPagination page={page}/> : null}</div>
      <div className="card_container">
        <div className="card_heading_text">
        <Typography component='h2' variant='h2' text={title}/>
        </div>
        <div className="card_sub_text">
          <Typography variant='p' text={text}/>
        </div>
        <div className="btn">
          {
            showBtn ? <Button text='continue' onClick={onClick}/> : null
          }
          
        </div>
      </div>
    </div>
  )
}

export default Card
