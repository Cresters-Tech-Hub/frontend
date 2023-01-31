import { Login } from "../../pages/login/Login"

import { APPNAVIGATIONROUTES } from "./apiRoutes"
import React from 'react'
import Auth from "../auth/Auth"
import { Route } from "react-router-dom"

const {login, register, home, auth} = APPNAVIGATIONROUTES
export const routes = [
    {
        link:home,
        exact:true,
        requiresAuth:false
    },
    {
        link:auth,
        exact:true,
        component:<Auth/>,
        requiresAuth:false
    },
   
]