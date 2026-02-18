
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  let [alldata, setalldata] = useState()
  console.log("alldata", alldata)
  function getalldata(e) {
    setalldata({
      ...alldata,
      [e.target.name]: e.target.value
    })
  }

  function loginPopUp() {
    toast.success("Succesfulll");
  }
  const Navigate = useNavigate();
  console.log(loginPopUp)
  
  function handleSubmit(e) {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem("users"))
    if (alldata && user && alldata.Emailid === user.Emailid && alldata.password === user.password) {
      
      toast.success("login suces")
      setTimeout(() => {
        Navigate("/Home")
      }, 4000);
    }
    else {
      alert("Invalid Details")
    }
  }

  return (
    <>
      <Toaster />
      <div className='login'>
        <div className='login1'>
          <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor=""></label>
            <input type="text" name="Emailid" id="Emailid" onChange={getalldata} placeholder='Emailid' /><br></br>
            <input type="text" name="password" id="password" onChange={getalldata} placeholder='password' /><br></br>
            <button type='submit'>Submit</button>
            <p>Don't have an account <span style={{ color: "blue" }}>sign up</span></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login 