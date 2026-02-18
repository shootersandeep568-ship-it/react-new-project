import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Post() {
    let [Postdata, setPostdata] = useState([])
    console.log(Postdata)

    async function getdata() {
        let getPostdata = await fetch("https://dummyjson.com/posts")
        let jsondata = await getPostdata.json();
        setPostdata(jsondata.posts)
    }
    useEffect(() => {
        getdata()
    })
    return (
        <>

            <>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "40px 40px" }}>
                    {Postdata.map((item) => {
                        return (
                            <>
                                <div style={{ width: "30%" }}>
                                    <Link to={`/Postdetails/${item.id}`}>
                                        <div className='hlo'>
                                            <div style={{ marginLeft: "20px" }}>
                                                <h2>{item.title}</h2>
                                                <h2>{item.views}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>

            </>


        </>
    )
}

export default Post

