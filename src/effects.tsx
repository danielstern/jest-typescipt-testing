import delay from "delay"
export const getConversionMap = async () => {
  await delay(500)

  return {
    "USD:GBP": 1 + Math.random() * 0.2,
    "USD:CAD": 1 - Math.random() * 0.25
  }
}