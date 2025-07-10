import type { CartData } from './cart';

export type AppContextMethods = {
  clearCart: () => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalAmount: number;
  totalCost: number;
};

export type stateType = {
  loading: boolean;
  cart: Map<string, CartData>;
};

export type AppContextType = AppContextMethods & stateType;

export type Action =
  | { type: 'CLEAR_CART' }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'INCREASE'; payload: { id: string } }
  | { type: 'DECREASE'; payload: { id: string } }
  | { type: 'LOADING' }
  | { type: 'DISPLAY_ITEMS'; payload: { cart: any } };
