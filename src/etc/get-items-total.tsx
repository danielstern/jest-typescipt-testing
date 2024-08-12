export interface CartItem {
  name : string;
  cost : number;
}


export function getItemsTotal(items : CartItem[]) : number {
  const prices = items.map(i => i.cost)
  let total = 0
  for (const price of prices) {
    // throw an error if the price is not a number
    if (typeof price !== "number") {
      throw new Error("Non number in list")
    }
    if (price < 0) {
      throw new Error("Invalid value")
    }
    total += price
  }
  return parseFloat(total.toFixed(2))
}
