import { useEffect, useState } from 'react'
import { CartItem } from './etc/get-items-total';
import { Currency, convertCurrency } from './convertCurrency';

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

