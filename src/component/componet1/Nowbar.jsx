
import React, { useState } from 'react'

function Nowbar() {
    let [alldata, setalldata] = useState()
    console.log("alldata", alldata)

    function getalldata(e) {
        setalldata({
            ...alldata,
            [e.target.name]: e.target.value
        })
    }
    function handlebook(e) {
        e.preventDefault()
        console.log("handlebook function call")
        localStorage.setItem("book", JSON.stringify(alldata));

    }

    return (
        <>
         <h2 style={{ textAlign: "center", fontSize: "50px", color: "blue", marginTop: "100px", marginBottom: "50px" }}>Notary Public &</h2>
            <div className='header1'>
                <div className='header2'>
                    <div className='header3'>
                        <h2 style={{ font: "50px" }}>Notary Public &<br></br> Legal Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Veritatis cupiditate deserunt
                            placeat necessitatibus a aliquam<br></br> corrupti nisi odio aliquid, accusamus.</p>
                    </div>
                    <div className='header4'>
                        <h2 style={{ color: "white" }}>Book an Appointment</h2>
                        <form action="" onSubmit={handlebook}>
                            <label htmlFor="" >
                                <input type="text" id='' onChange={getalldata} placeholder='Name' name='name' /><br></br>
                                <input type="email" id='' onChange={getalldata} placeholder='Email' name='email' /><br></br>
                                <input type="text" id='' onChange={getalldata} placeholder=' salect date' name='data' /><br></br>
                                <button>Book Appointment</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nowbar
