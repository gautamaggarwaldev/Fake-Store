import { notify } from '../toast messages/toast.js';
const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING": {
            return { ...state, isLoading: action.payload };
        }

        case "INIT_APP": {
            const data = action.payload;
            let products = {};
            let subtotal = 0;

            for (let item of data.products) {
                products[item.id] = item;
            }

            for (let item of data.cartData.products) {
                subtotal = subtotal + products[item.productId].price * item.quantity;
            }

            return {
                cart: {
                    products: data.cartData.products,
                    subtotal: subtotal,
                },
                products: products,
            };
        }

        case "ADD_ITEM": {
            let updatedCart = {};
            const existingProduct = state.cart.products.find(
                (item) => item.productId === action.payload.productId,
            );

            if (!existingProduct) {
                updatedCart = {
                    ...state.cart,
                    products: [
                        ...state.cart.products,
                        {
                            productId: action.payload.productId,
                            quantity: 1,
                        },
                    ],
                    subtotal:
                        state.cart.subtotal +
                        state.products[action.payload.productId].price,
                };
            } else {
                updatedCart = {
                    ...state.cart,
                    products: state.cart.products.map((item) => {
                        if (item.productId === action.payload.productId) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        } else {
                            return item;
                        }
                    }),
                    subtotal:
                        state.cart.subtotal +
                        state.products[action.payload.productId].price,
                };
            }

            localStorage.setItem("cartData", JSON.stringify(updatedCart));
            notify("success", "Successfully Added Product");
            return { ...state, cart: updatedCart };
        }
        case "REMOVE_ITEM": {
            const updatedCart = {
                ...state.cart,
                products: state.cart.products
                    .map((item) => {
                        if (item.productId === action.payload.productId) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        } else {
                            return item;
                        }
                    })
                    .filter((item) => item.quantity !== 0),
                subtotal:
                    state.cart.subtotal - state.products[action.payload.productId].price,
            };

            localStorage.setItem("cartData", JSON.stringify(updatedCart));
            notify("success", "Successfully Removed Product");
            return { ...state, cart: updatedCart };
        }

    }
}

export default reducer;