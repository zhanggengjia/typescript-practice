import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import type { CartData } from './types/cart';
import type { Action, stateType } from './types/contextType';

const reducer = (state: stateType, action: Action): stateType => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map<string, CartData>() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map<string, CartData>(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    if (item) {
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    } else {
      throw Error('Increase Error');
    }
  }

  if (action.type === DECREASE) {
    const newCart = new Map<string, CartData>(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    if (item && item.amount === 1) {
      newCart.delete(itemId);
    } else if (item) {
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(itemId, newItem);
    } else {
      throw Error('Decrease Error');
    }
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map<string, CartData>(
      action.payload.cart.map((item: CartData) => [item.id, item])
    );
    return { ...state, cart: newCart, loading: false };
  }

  throw new Error(`no matching action type : ${(action as any).type}`);
};

export default reducer;
