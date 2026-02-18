import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header';
import { useCart } from "react-use-cart";
import toast, { Toaster } from "react-hot-toast";


function Project() {
  let [Projextdata, setProjectdata] = useState([])
  const [filterApi, setFilterApi] = useState([]);
  const { addItem } = useCart();

  async function getdata() {
    let getProjectdata = await fetch("https://dummyjson.com/products")
    let jsondata = await getProjectdata.json();
    setProjectdata(jsondata.products)
    setFilterApi(jsondata.products);

  }
  console.log(Projextdata)
  useEffect(() => {
    getdata()
  }, {})

  const filterData = (cate) => {
    const filterItems = filterApi.filter((item) => item.category == cate);
    setFilterApi(filterItems);
  };

  const CartPopUp = () => {
    toast.success("Item Add to Cart");
  };
  return (
    <>
      <Toaster />
      <Header />
      <div className='hy'>
        <div>
          <h2 className='hy2'>MY PROJECT</h2>
        </div>
        <div className='hy1'>
          <button onClick={() => filterData("beauty")} >beauty</button>
          <button onClick={() => filterData("fragrances")}>fragrances</button>
          <button onClick={() => filterData("furniture")}>furniture</button>
          <button onClick={() => filterData("groceries")}>groceries</button>
          <button onClick={() => filterData("All")} >All</button>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", }}>
        {filterApi.slice(0, 6).map((item) => {
          return (
            <>
              <div style={{ width: "30%" }}>
                <Link to={`/Details/${item.id}`}>
                  <div style={{ border: "1px solid", padding: "10px 10px", marginTop: "30px", borderRadius: "30px", background: "#26bf5152" }}>
                    <div style={{ textAlign: "center" }}>
                      <img src={item.images} alt="" width={"60%"} />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <p style={{ fontSize: "30px" }}>{item.price}</p>
                      <p style={{ color: "green" }}>{item.brand}</p>
                      <Link to={{ item }}>
                        <button style={{ padding: "10px 25px", background: "green", color: "white", borderRadius: "20px", border: "none", marginBottom: "40px", marginTop: "20px", marginLeft: "0px" }} onClick={() => {
                          addItem(item); CartPopUp();
                        }}>Add cart</button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Project
