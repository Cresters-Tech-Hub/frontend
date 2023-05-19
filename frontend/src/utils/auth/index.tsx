import axios from 'axios';
import jwt from 'jwt-decode' // import dependency


const BASE_URL = "https://backup-api.herokuapp.com/api/core/v1/"



interface User{
        user_email: string,
        user_password: string,
        user_path: string,
        user_name: string,
        roles: Array<string>,
        last_name: string,
        typ: string,
        user_id: number,
        name: string,
        other_name: string,
        user_location: string,
        exp: number,
        first_name: string,
        jti?: string
}


interface Pwd{
    userSecret: string,
    username: string
}

interface RegCredentials {
    cipherCode:string
    emailAddress: string
    firstName?: string
    lastName?: string
    location: string
    path:string | undefined
    phoneNumber?: string
    role: string | undefined
    username: string
    validationUrl?:string
  }

  interface IRegResponse{
    id: number,
    username: string
    email: string
    firstname: string
    lastname: string
    userLevel: number
    location: string
    role: string
    path: string
  }
// some logic
export const authLogin = async(credentials:Pwd)=>{ 
    const post = await axios.post(BASE_URL+"login", {
        userSecret: credentials.userSecret,
        username: credentials.username
    });

    const res = await post.data?.data;

    if(res){
       localStorage.setItem("token", JSON.stringify(res));
    }else{
        localStorage.removeItem("token");
    }

}
export const authRegister = async(credentials:RegCredentials)=>{ 
    const post = await axios.post(BASE_URL+"create/user", credentials);

    const res: IRegResponse | null = await post.data?.data;

    if(res){
      return true
    }
    return false
}

export const getItemFromLocalStorage = ()=>{
    let store = localStorage.getItem("token");
    if(store){
        const data = JSON.parse(store);
        const user:User = jwt(data.access_token)
        return user;
    }else{
       return null
    }

}