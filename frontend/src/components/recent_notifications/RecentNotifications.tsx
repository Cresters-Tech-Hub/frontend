import React from 'react'
import './style.scss'
import { RxCaretRight, RxDotFilled } from 'react-icons/rx';
import { BsArrowDown } from 'react-icons/bs';

interface IRecentNofication{
     array:any[]
     margintTop?:string
}

const RecentNotifications = ({array, margintTop}:IRecentNofication) => {
  return (
    <div className="RecentNotifications" style={{marginTop: margintTop ? margintTop : '1rem'}}>
    <div className="header_items">
        <div className="left">Recent Notifications</div>
        <div className="right">
            <span>View all </span>
            <RxCaretRight/>
        </div>
    </div>
    {
        array.map((v, i)=>(
            <div className="list_items" key={i}>
            <div className="dot"><RxDotFilled  color="#0AC947" fontSize={24}/></div>
            <div className="text">{v}</div>
            <div>
                <BsArrowDown color="#0AC947"/>
            </div>
        </div>
        ))
       }
</div>
  )
}

export default RecentNotifications
