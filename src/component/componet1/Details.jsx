// import React from 'react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams()
    let [apiData, setApiData] = useState([]);
    console.log(apiData.id);

    async function getData() {
        let getApiData = await fetch("https://dummyjson.com/products");
        let jsondata = await getApiData.json();
        const filterData = jsondata.products.find((item) => item.id === id);
        setApiData(filterData);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            <div className='details'>
                <div className='details1'>
                     <img src={apiData.images} alt="" width={"60%"} />
                    
                </div>
                <div className='details2'>
                    <div className='details3'>
                        <h1>{apiData.title}</h1>
                        <p>Price:-  {apiData.price}</p>
                        <p>Brand:-  {apiData.brand}</p>
                        <p>brand:-  {apiData.stock}</p>
                        <p>category:-  {apiData.category}</p>
                         <p>discountPercentage:-  {apiData.discountPercentage}</p>
                        <p style={{width:"455px"}}>description:-  {apiData.description}</p> 
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

export default Details
