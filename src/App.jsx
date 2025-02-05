import { createContext, useEffect, useReducer } from 'react'
import reducer from './utils/reducer.js';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from './router/router.jsx';
import "react-toastify/dist/ReactToastify.css";
import api from "./api/index.js";
import { notify } from './toast messages/toast.js'

export const AppDispatchContext = createContext(null);
export const AppContext = createContext(null);

const initialAppContext ={
  products: [],
  cart: {
    products: [],
    subtotal: 0,
  },
  isLoading: false,
};

function App() {

  const [appContext, appDispatch] = useReducer(reducer, initialAppContext);

  useEffect(() => {
    //fetch cart
    const initApp = async () => {
      appDispatch({type: "LOADING", payload: true});

      try {
        if(!localStorage.getItem("cartData")) {
          const cartData = await api.fetchUserCart(1);
          const products = await api.fetchProducts();

          appDispatch({
            type: "INIT_APP",
            payload: {
              cartData: cartData,
              products: products,
            },
          });
          localStorage.setItem("cartData", JSON.stringify(cartData));
        }
        else {
          const cartData = JSON.parse(localStorage.getItem("cartData"));
          const products = await api.fetchProducts();
          appDispatch({
            type: "INIT_APP",
            payload: {
              cartData: cartData, 
              products: products,
            },
          });
        }
      }
      catch(error) {
        console.log(error);
        notify("error", "Something went wrong");
      }
      appDispatch({type: "LOADING", payload: false});
    };
    initApp();

  }, []);


  return (
    <AppContext.Provider value={appContext}>
      <AppDispatchContext.Provider value={appDispatch}>
        <RouterProvider router={router} />
      </AppDispatchContext.Provider>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
