import React from 'react';
import { env } from 'process';

const baseUri = import.meta.env.VITE_BASE_URI;



export const apiRoutes ={
   createUser:()=>baseUri+'users',
   getUserByUserId:(userId:string)=>baseUri+`users/${userId}`,
   deleteUserByUserId:(userId:string)=>baseUri+`users/${userId}`,
   getUserByAddress:(localtion:string)=>baseUri+`users/${localtion}`,
   getUserByEmail:(email:string)=>baseUri+`users/${email}`,
   getUserByFirstName:(firstName:string)=>baseUri+`users/${firstName}`,
   getUserByLastName:(lastName:string)=>baseUri+`users/${lastName}`,
   getUserByRole:(role:string)=>baseUri+`users/role/${role}`,
   updateUserByUserId:(userId:string)=>baseUri+`users/updateUser/${userId}`,
}
export const APPNAVIGATIONROUTES = {
   home:'/',
   auth:'auth',
   login:'auth/login',
   register:'auth/register',
} 