import React from 'react'
import { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Product from './Product';
import Product1 from './Product1';
const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [itemIndex, setitemIndex] = useState(1);
  return (
    <div className='bg-gradient-to-tl from-green-400 to-indigo-900   lg:flex-row brightness-100 lg:justify-center w-full p-4 h-screen flex flex-row space-x-4'>
      <div className='w-[50%] p-4 space-y-8 items-center h-[50%] bg-white rounded-2xl flex flex-col'>

        <div className='font-bold text-[20px]'>Raw material</div>
        <div className='bg-slate-200 w-full space-y-4 rounded-lg'>
        {/* {cart.length === 0 && <p>Raw material: (empty)</p>}
      {cart.length > 0 && <p>Raw material: {cart.toString()}</p>}
      <button
      className='rounded-xl p-2  border bg-green-600'
        onClick={() => {
          setCart([...cart, ` item ${itemIndex}`]);
          if(itemIndex )
          setitemIndex(itemIndex + 1);
        }}
      >
        Add to Raw material Cart
      </button> */}
      <Counter/>
      <Counter2/>
        </div>
      </div>
      <div className='w-[50%] p-4 space-y-8 items-center h-[50%] bg-white rounded-2xl flex flex-col'>

<div className='font-bold text-[20px]'>Finish Product</div>
        <div className='bg-slate-200 w-full space-y-4 rounded-lg'>
    <Product/>
    <Product1/>
</div>
</div>
    </div>
  )
}

export default Dashboard
