import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from './img/sk.webp'


function Postdetails() {
    const { id } = useParams()
    let [apiData, setApiData] = useState([]);
    console.log(apiData.id);

    async function getData() {
        let getApiData = await fetch("https://dummyjson.com/posts");
        let jsondata = await getApiData.json();
        const filterData = jsondata.posts.find((item) => item.id == id);
        setApiData(filterData);
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>

            <div className='post'>
                <div className='postt'>
                    <img src={img} alt="" width={"100%"} />
                </div>
                <div className='post2'>
                    <div className='post3'>
                        <p>title:-   {apiData.title}</p>
                        <p> discountPercentage:-   {apiData.discountPercentage}</p>
                        <p style={{ width: "620px" }}> body:-   {apiData.body}</p>
                        <p>views:-   {apiData.views}</p>
                        <div className='now'>
                            <button >ADD TO CART</button>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postdetails
