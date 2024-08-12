import { useEffect, useState } from 'react'
import { getConversionMap } from './effects';
import { CartItem } from './etc/get-items-total';
export function useItems(
  rootCurrency = Currency.USD,
  targetCurrency = Currency.GBP
){
  const [items, setItems] : [CartItem[], any]= useState([])
  const defaultItems = [
    {
      name : "Breaking Bach",
      cost : 14.99
    },
    {
      name : "Guardians of the Gaughin",
      cost : 12.95
    },
    {
      name : "Barbthoven",
      cost : 9.99
    }
  ]
  useEffect(()=>{
    (async function(){
      for (const item of defaultItems) {
        item.cost = await convertCurrency(item.cost, rootCurrency, targetCurrency)
        item.cost = parseFloat(item.cost.toFixed(2))
      }
      setItems(defaultItems)
    })()
  },[])
  return items
}


enum Currency {
  USD = "USD", 
  CAD = "CAD",
  GBP = "GBP"
}
export async function convertCurrency(
  value : number = 0,
  rootCurrency : Currency,
  targetCurrency : Currency
) : Promise<number> {

  const map = await getConversionMap()
  const key = `${rootCurrency}:${targetCurrency}`
  console.table({key})
  const conversion = map[key]
  console.table(map)
  if (!conversion) {
    throw new Error("This currency conversion is not supported")
  }
  const next = value *  conversion
  console.table({
    value, rootCurrency, targetCurrency, conversion, next
  })
  return next
}