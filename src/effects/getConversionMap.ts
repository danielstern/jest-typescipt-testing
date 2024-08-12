const delay = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
console.info("Loaded real map")
export const getConversionMap = async () => {
  await delay(500)

  return {
    "USD:GBP": 1 + Math.random() * 0.2,
    "USD:CAD": 1 - Math.random() * 0.25
  }
}