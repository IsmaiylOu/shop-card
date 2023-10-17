import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article className='container mt-3' >
        {
            cart?.map((item)=>(
                <div className='d-flex flex-row justify-content-center border-bottom border-primary container'
                 key={item.id}>
                    <div className="">
                        <img src={item.img} alt="laptop" />
                    </div>
                    <div className='mt-4 ms-1 text-bold fs-3 text'>
                        <p>{item.title}</p>
                        <button 
                        className='btn btn-primary m-2'
                        onClick={()=>handleChange(item, +1)}> + </button>
                        <span
                        className='m-1'>{item.amount}</span>
                        <button 
                        className='btn btn-primary m-2'
                        onClick={()=>handleChange(item, -1)}> - </button>
                    
                    
                        <span className='m-2'>{item.price} DH</span>
                        <button
                        className='btn btn-danger m-2'
                        onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='justify-content-center'>
            <span className='h2 text-info'>Total Price</span>
            <span className='ms-3 h3 text-success '>{price} DH</span>
            <div>
            <button className='btn btn-success w-100 h- mt-2'>Bay</button>
            </div>

        </div>
    </article>
  )
}

export default Cart;