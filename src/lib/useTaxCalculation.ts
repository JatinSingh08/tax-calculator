import { taxSlabs } from "./tax";

interface inputs {
  purchase_price: string,
  sale_price: string,
  expenses: string,
  annual_income: string,
  term_selected: string
}
interface Tax {
  income: string,
  tax: string
}
const useTaxCalculation = (inputs: inputs) => {
  const capitalGainsAmount = Number(inputs.sale_price) - Number(inputs.purchase_price) - Number(inputs.expenses);
  // const disount = inputs.term_selected === "long" && 50% * capitalGainsAmount; 
  let discount = 0;
  if (inputs.term_selected === "long_term" && capitalGainsAmount > 0) {
    discount = 0.5 * capitalGainsAmount; // 50% discount
  }
  const netCapitalGains = inputs.term_selected === "long_term" ? capitalGainsAmount - discount : capitalGainsAmount;
  const taxTobePaid = taxSlabs.find((tax: Tax) => tax.income === inputs.annual_income);

  return {
    capitalGainsAmount,
    discount,
    netCapitalGains,
    taxTobePaid
  }
}

export default useTaxCalculation
