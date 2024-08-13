import { CartItem} from "../etc/get-items-total"
import React from "react"
export const CartItemsDisplay = ({
  // shoppingCartItems : CartItem[]
  shoppingCartItems = [] as CartItem[]
}) => (
  <>
   {shoppingCartItems.map((item, i) => (
        <div key={i}> 
          {item.name} - {item.cost}
          
        </div>
       ))}
  </>
)