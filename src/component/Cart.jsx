import React from 'react'
import img from '../component/componet1/img/m.jpg'
import { useCart } from "react-use-cart";

function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
        useCart();

    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "10px", fontSize: "30px", color: "blue" }}>
                <h2>Shopping Cart ({totalUniqueItems})</h2>
            </div>
            <ul >
                {items.map((item) => {
                    return (
                        <>
                            <div className='cart'>
                                <div className='cart1'>
                                <img src={item.images} alt="" width={"100%"} />
                            </div>
                            <div className='cart2'>
                               <div>
                                 <h2 style={{ marginBottom: "10px" }}>{item.title}</h2>
                                <p>{item.description}</p>
                               </div>
                                <div className='cart3'>
                                    <ul>
                                        <button className='btnn'
                                            onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                                        >
                                            -
                                        </button>
                                        <button className='btnn'
                                            onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                                        >
                                            +
                                        </button>
                                        <button className='btnn' onClick={() => removeItem(item.id)}>&times;</button>
                                       
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </>
                    )

                })}
            </ul>
            <div className="checkout-details">
                <div className='total'>
                    <div>
                        <h2><h2>Subtotal</h2></h2>
                    </div>
                    <div>
                        <h2>$440</h2>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <p>Shipping taxes, and discounts calculated at checkout</p>
                </div>
                <div className='chekout'>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart
