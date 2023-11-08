import { taxSlabs } from "./tax";

interface inputs {
  purchase_price: number,
  sale_price: number,
  expenses: number,
  annual_income: string,
  term_selected: string
}
interface Tax {
  income: string,
  tax: string
}
const useTaxCalculation = (inputs: inputs) => {
  const rates = [0, 19, 32.5, 37, 45]
  const capitalGainsAmount = Number(inputs.sale_price) - Number(inputs.purchase_price) - Number(inputs.expenses);
  // const disount = inputs.term_selected === "long" && 50% * capitalGainsAmount; 
  let discount = 0;
  if (inputs.term_selected === "long_term" && capitalGainsAmount > 0) {
    discount = 0.5 * capitalGainsAmount; // 50% discount
  }
  const netCapitalGains = inputs.term_selected === "long_term" ? capitalGainsAmount - discount : capitalGainsAmount;
  const taxRate = taxSlabs.find((tax: Tax) => tax.income === inputs.annual_income);
  let taxToBePaid = 0;
 
  for (const slab of taxSlabs) {
    if (inputs.annual_income === slab.income) {
      const taxInfo = slab.tax !== '0%' ? slab.tax.split('+').map((item) => item.trim()) : '0%';
      const fixedTax = parseFloat(taxInfo[0].replace('$', '')) || 0;
      
      if (taxInfo[1]?.includes('%')) {
        // If the taxInfo includes a percentage, extract the first two characters
        const percentTax = parseFloat(taxInfo[1].substr(0, 2)) || 0;
        taxToBePaid = (percentTax / 100) * netCapitalGains;
      } else {
        // If there is no percentage, use the fixed tax amount
        taxToBePaid = fixedTax;
      }
      
      break; // No need to continue searching after a match
    }
  }
  

  return {
    capitalGainsAmount,
    discount,
    netCapitalGains,
    taxRate,
    taxToBePaid
  }
}

export default useTaxCalculation
