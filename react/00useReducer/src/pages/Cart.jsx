import React, { useReducer } from 'react'
import { CartActionTypes } from '../reducer/cartActionType';
import { cartReducer, initialCartState } from '../reducer/cartReducer';

const sampleProducts = [
  { id: 1, name: "iPhone 16", price: 150000 },
  { id: 2, name: "MacBook Pro", price: 250000 },
  { id: 3, name: "AirPods Pro", price: 24999 },
];

const Cart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
  return (
     <div className='p-15 '>
      <h1 className='mb-2'>🛒 Shopping Cart (useReducer)</h1>

      <hr />

      <h2 className='my-2 text-2xl text-rose-400 font-bold'>Products:</h2>
      {sampleProducts.map((prod) => (
        <div key={prod.id} className='mb-10'>
          {prod.name} — ₹{prod.price}
          <button
           className='ml-10 border px-2 py-1 rounded-2xl bg-amber-200 hover:bg-amber-300 cursor-pointer'
            onClick={() =>
              dispatch({ type: CartActionTypes.ADD, payload: prod })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}


      <h2>Cart</h2>

      {state.items.length === 0 && <p>Cart is empty</p>}
        {state.items.map((item) => (
          <div key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity}
          </div>
        ))}

      <h3 className='mt-4'>Total Amount: ₹{state.totalAmount}</h3>
    </div>
  )
}

export default Cart