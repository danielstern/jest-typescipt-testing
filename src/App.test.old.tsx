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


