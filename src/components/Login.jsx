import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {toast} from "react-toastify"
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
  export default function  App(){

let [username,setUsername] = useState("")
let [password,setPassword] = useState("")

let navigate=useNavigate()

let handleLogin= (e)=>{
    e.preventDefault()
    let localUsername =localStorage.getItem("username")
    let localPassword =localStorage.getItem("password")
    
    if(localUsername ==username && localPassword==password )
    {
        toast.success(`${username}  Logged in successfully `)
        navigate('/menu')
    }
    else{
        toast.error(`please check username and password`)
        navigate('/login')
    }
    
}

return(
  <div className='main'  style={{display : "center" ,border: "5px solid aqua", height : "650px"}}>
        <h1>Login PAGE</h1>
        <section >
    <form    >
      <div className='block'>
    <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' onChange={(e)=>{
      setUsername(e.target.value)
    }} />
    <br/>
   
    <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' onChange={(e)=>{
      setPassword(e.target.value)
    }} />
    <br/>
    <br/>
    <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
        <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
      </MDBCol>
      <br/>
      
      <MDBCol>
        <a href='#!'>Forgot password?</a>
      </MDBCol>
    </MDBRow>
    
    <MDBBtn type='submit' block onClick={handleLogin}>
      Log in
    </MDBBtn>
   </div>
  </form>
  </section>
  </div>
)
}