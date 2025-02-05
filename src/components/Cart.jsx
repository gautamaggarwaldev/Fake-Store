import star from "../assets/star.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { useContext } from "react";
import { AppDispatchContext } from "../App.jsx";
import { Link } from "react-router-dom";
export default function Cart({ product, quantity}) {

    const appDispatch = useContext(AppDispatchContext);

    // add item to cart
    const addItem = () => {
        appDispatch({
            type: 'ADD_ITEM',
            payload: { productId: product.id },
        });
    };

    // remove item from cart
    const removeItem = () => {
        appDispatch({
            type: 'REMOVE_ITEM',
            payload: { productId: product.id },
        });
    };
    
  return (
    <div>
      
    </div>
  )
}
