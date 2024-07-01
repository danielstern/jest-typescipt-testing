import './App.css'
import { CartItem, useItems, getItemsTotal } from './utils'

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
       {shoppingCartItems.map((item, i) => (
        <div key={i}> 
          {item.name} - {item.cost}
          
        </div>
       ))}
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
