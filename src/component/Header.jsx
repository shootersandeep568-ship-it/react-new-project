import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className='hd'>
                <h2>Future Minds</h2>
                <ul>
                    <li><Link to={"/"}> Home</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"/Project"}>Project</Link></li>
                    <li><Link to={"/Blogs"}>Blogs</Link></li>
                    <li><Link to={"/Login"}>Login</Link></li>
                </ul>
                <div className='add'>
                    <Link to={"/Cart"}><i class="fa-solid fa-cart-plus"></i></Link>
                </div>
            </div>





        </>
    )
}

export default Header
