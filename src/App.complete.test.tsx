import { CartItem, getItemsTotal } from "./etc/get-items-total"
describe("the application", ()=>{
  it.todo("should display as expected")

  describe("getItemsTotal", ()=>{

    const specItems : CartItem[] = [
      {name: "item 1", cost: 100},
      {name: "item 2", cost: 200},
      {name: "item 3", cost: 300}
    ]

    it("should return 0 for an empty list", ()=>{
      expect(getItemsTotal([])).toBe(0)
    })
    it("should return the sum of a list of numbers", ()=>{

      expect(getItemsTotal(specItems)).toBe(600)

    })

    it ("should throw an error on a non number", ()=>{
      expect(()=>getItemsTotal([{name: "item 1", cost: "100"} as any])).toThrow()
    })

    const randomDataSets : CartItem[][] = []
    const randomDataSetCount = 10
    for (let i = 0; i < randomDataSetCount; i++) {
      const randomDataSet : CartItem[] = []
      const randomItemCount = Math.floor(Math.random() * 10)
      for (let j = 0; j < randomItemCount; j++) {
        randomDataSet.push({
          name: `item ${j}`,
          cost: Math.random() * 100
        })
      }
      randomDataSets.push(randomDataSet)
    }
    for (let i = 0; i < randomDataSetCount; i++) {
      it(`should return the sum of a list of numbers for random data set ${i}`, ()=>{
        const randomDataSet = randomDataSets[i]
        const expected = randomDataSet.reduce((acc, item)=>acc + item.cost, 0)
        expect(getItemsTotal(randomDataSet)).toBeCloseTo(expected)
      })
    }
  })

})

// import { convertCurrency, Currency } from "./convertCurrency"

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


