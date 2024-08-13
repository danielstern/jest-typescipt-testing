jest.mock('./effects/getConversionMap');

import { convertCurrency, Currency } from "./convertCurrency"

describe("Convert currency", ()=>{
  it("Should convert as expected", async()=>{
    const value = 1
    const rootCurrency = Currency.USD
    const targetCurrency = Currency.CAD

    expect(await convertCurrency(value, rootCurrency, targetCurrency)).toBeCloseTo(2)
  })
})



jest.mock('./effects/getConversionMap')

import { convertCurrency, Currency } from "./convertCurrency"

describe("The currency converter", () => {
  it("should convert USD to CAD", async () => {
    const value = 1
    const root = Currency.USD
    const target = Currency.CAD
    const nextValue = await convertCurrency(value, root, target)
    expect(nextValue).toBeCloseTo(1.5)
  })
})

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