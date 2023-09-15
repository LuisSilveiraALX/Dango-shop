import { createContext, useEffect, useState } from "react"
import { Data } from "@/components/card/Data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < Data.length +1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopcontextProvider = (props) => {
        const [cartItems,setCartItems] = useState(getDefaultCart());

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = Data.find((data) => data.id === Number(item));
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }

            return totalAmount;
        }

        const addToCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
        };

        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
        };

        const updateCartItemCount = (newAmount, itemId) => {
            setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
          };

        const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}