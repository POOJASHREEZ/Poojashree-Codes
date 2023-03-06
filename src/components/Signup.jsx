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

let handleSubmit= (e)=>{
    e.preventDefault()
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    navigate("/login")
    toast.success(`${username} was successfully registered`)
}
return(
  <div className='main'  style={{display : "center" ,border: "5px solid aqua", height : "650px"}}>
        <h1>SIGNUP PAGE</h1>
    <form>
    <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' onChange={(e)=>{
      setUsername(e.target.value)
    }}/>
    <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' onChange={(e)=>{
      setPassword(e.target.value)
    }} />

    <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
        <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
      </MDBCol>
      <MDBCol>
        <a href='#!'>Forgot password?</a>
      </MDBCol>
    </MDBRow>

    <MDBBtn type='submit' block onClick={handleSubmit}>
      Sign in
    </MDBBtn>
  </form>
  </div>
)
}