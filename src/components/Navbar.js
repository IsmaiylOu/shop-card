// import React from 'react';
// import '../styles/navbar.css';
// import {BsFillCartFill} from "react-icons/bs"

// const Navbar = ({size, setShow}) => {
//   return (
//     <nav className=''>
//         <div className="nav_box">
//             <span className="my_shop" onClick={()=>setShow(true)}>
//                 My Shopping
//             </span>
//             <div className=''>
//                 <BsFillCartFill
//                     className='w-100 h-75' 
//                     onClick={()=>setShow(false)}>
//                 </BsFillCartFill>
//                 <span className=''>{size}</span>
//             </div>
//         </div>
//     </nav>
//   )
// }

// export default Navbar;
import React from 'react';
import '../styles/navbar.css';
import {BsFillCartFill} from "react-icons/bs"

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <BsFillCartFill className="fas fa-cart-plus"></BsFillCartFill>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;

