
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


function Signup() {
    let [alldata, setalldata] = useState()
    console.log("alldata", alldata)
    function getalldata(e) {
        setalldata({
            ...alldata,
            [e.target.name]: e.target.value
        })
    }

    function SignupPopUp() {
        toast.success("Succesfulll");
    }
    const Navigate = useNavigate();
    function handleSignup(e) {
        e.preventDefault()
        console.log("handleSignup function call")
        localStorage.setItem("users", JSON.stringify(alldata));
        toast.success("Signup suces")
        setTimeout(() => {
            Navigate("/Login")
        }, 4000);
    }

    return (
        <>
            <Toaster />
            <div className='signup'>
                <div className='signup1'>
                    <h2>Sign Up</h2>
                    <form action="" onSubmit={handleSignup}>
                        <label htmlFor=""> Username</label><br></br>
                        <input type="text" name='username' id='' onChange={getalldata} /><br></br>
                        <label htmlFor="">Email</label><br></br>
                        <input type="text" name="Emailid" id="" onChange={getalldata} /><br></br>
                        <label htmlFor="">Password</label><br></br>
                        <input type="text" name="password" id="" onChange={getalldata} /><br></br>
                        <button type='submit'>Submit</button>
                        <p>Already have an account? <span style={{ color: "red" }}></span><Link style={{ color: "blue" }} to={"/Login"}>login</Link></p>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup
