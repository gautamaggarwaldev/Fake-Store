const FAKE_STORE_API_URL = 'https://fakestoreapi.com';

const api = {
    fetchUserCart: async (userId) => {
        const res = await fetch(`${FAKE_STORE_API_URL}/carts/user/${userId}`);
        const data = await (res.json())[0];

        return data;
    },

    fetchProducts: async () => {
        const res = await fetch(`${FAKE_STORE_API_URL}/products`);
        const data = await res.json();

        return data;
    }
};

export default api;

