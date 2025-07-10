import type { CartData } from './types/cart';

export const getTotals = (
  cart: Map<string, CartData>
): { totalAmount: number; totalCost: number } => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * parseFloat(price);
  }
  return { totalAmount, totalCost };
};
