import { getConversionMap } from './effects/getConversionMap';

export enum Currency {
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
  const conversion = map[key]
  if (!conversion) {
    throw new Error("This currency conversion is not supported")
  }
  const next = value *  conversion
  return next
}