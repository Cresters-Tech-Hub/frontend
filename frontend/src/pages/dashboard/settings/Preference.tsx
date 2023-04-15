import React, {useState} from 'react'
import "./preference.scss"
import { emailNotiPreference, userEmailNotiPreference, vendorEmailNotiPreference } from '../../../assets/JsonData/itemOptions';
import Switcher from '../../../components/toggleswitch/Toggler';
import Button from '../../../components/buttons';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Preference = () => {
    const [isTurnedOn, setIsTurnedOn] = useState(true);
    const {data:{role}} = useSelector((state:RootState)=>state.user)

    const onIsTurnONChange = () => {
        setIsTurnedOn(!isTurnedOn);
      };

      let array:Array<string> = [];

      if( role?.toLowerCase() === "vendor"){
        array = [...emailNotiPreference]
      }
      if( role?.toLowerCase() === "delivery agent"){
        array = [...vendorEmailNotiPreference]
      }
      if(role?.toLowerCase() === "user"){
        array = [...userEmailNotiPreference]
      }
  return (
    <div className='settings_preference'>
       <div className="preference_title">Email Notifications</div>
       <div className="email_settings">
        {
          array.map((item, i)=>(
                <div className="eamil_option" key={i}>
            <span>{item}</span>
            <div className="email_switcher">
            <Switcher
                            isOn={isTurnedOn}
                            handleToggle={onIsTurnONChange}
                        />
                        </div>
                </div>
            ))
        }
       </div>
       <div className="preference_btn">
       <Button text="Save Changes" variant="lg" type="submit" style={{fontSize:"16px"}}/>
       </div>
    </div>
  )
}

export default Preference
