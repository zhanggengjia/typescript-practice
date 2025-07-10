import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  type ReactNode,
} from 'react';
import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
// import cartItems from './data';
import { getTotals } from './utils';
import type { Action, AppContextType, stateType } from './types/contextType';
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: stateType = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    reducer as (state: stateType, action: Action) => stateType,
    initialState
  );
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id: string) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id: string) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id: string) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw Error('Context is error.');
  return context;
};
