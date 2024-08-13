import { CartItemsDisplay } from "./components/CartItemsDisplay"
import { render, screen } from "@testing-library/react"
import React from "react"
import { CartItem } from "./etc/get-items-total"

describe("The cart list component", () => {
  it("Should match the snapshot", ()=>{
    const items : CartItem[] = [
      {name: "item 1", cost: 100},
      {name: "item 2", cost: 200},
      {name: "item 3", cost: 300}
    ]
    const {container} = render(<CartItemsDisplay shoppingCartItems={items}/>)
    expect(container).toMatchSnapshot()
  })
})