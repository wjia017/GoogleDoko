export function formatNpr(amount: number): string {
  return `Rs. ${Number(amount || 0).toLocaleString("en-IN")}`;
}

export function formatCurrency(amount: number, currency = "Rs."): string {
  return `${currency} ${Number(amount || 0).toLocaleString("en-IN")}`;
}

export default formatNpr;
