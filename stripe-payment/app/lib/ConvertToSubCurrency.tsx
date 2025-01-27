export default function convertToSubCurrency(amount: number, factor = 100): number {
  return Math.round(amount * factor);
}