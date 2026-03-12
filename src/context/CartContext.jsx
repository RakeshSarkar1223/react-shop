import {useContext, useState, createContext} from 'react'

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    //The add function
    const addToCart = (product) => {
        setCart((prevCart) => {
            const isExist = prevCart.find((item) => item.id === product.id);
            if(isExist) {
                //yes
                return prevCart.map((item) => item.id === product.id ? {...item,quantity:item.quantity + 1}: item);
            }
            else {
                return [...prevCart, {...product, quantity: 1}];
            }
        })
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);

    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}


export function useCart() {
    return useContext(CartContext);
}