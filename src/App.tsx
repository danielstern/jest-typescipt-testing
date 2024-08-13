import './App.css'
import { CartItemsDisplay } from './components/CartItemsDisplay'
import { getItemsTotal, CartItem } from './etc/get-items-total'
import { useItems } from './utils'
import React from "react"
// import { CartItem, useItems, getItemsTotal } from './utils'

function App() {
  const shoppingCartItems : CartItem[] = useItems()
  const total = getItemsTotal(shoppingCartItems)
  console.info("Application is rendering.")
  return (
    <div style={{
      display : "flex",
      flexDirection : "column",
      gap : 8
    }}>
       <h1>
        Your Shopping Cart
       </h1>
       <CartItemsDisplay shoppingCartItems={shoppingCartItems}/>
      
       <h2>
        Your Total: ${total}
       </h2>
       <h3>
        <button>Check Out</button>
       </h3>
    </div>
  )
}

export default App
