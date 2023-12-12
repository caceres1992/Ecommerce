'use client'
import { PropsWithChildren, createContext, useContext, useState } from "react";


type CartShoppingState = {
    cartItems: ICartItem[],
    updateQuantity: (quantity: number, item: ICartItem) => void
    removeItem: (item: ICartItem) => void,
}
const defaultValues: CartShoppingState = {
    cartItems: [],
    updateQuantity: () => { },
    removeItem: () => { },

}
const CartContext = createContext<CartShoppingState>(defaultValues)

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = (props: PropsWithChildren) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([
        { _id: '1', name: 'Sneaker Military 2023',desc:"desc1", images: ['/assets/__image1.png'], price: 20, quantity: 2 },
        { _id: '2', name: 'Green Way 2024',desc:"desc2", images: ['/assets/__image2.png'], price: 30, quantity: 5 },
        { _id: '3', name: 'Snow Galaxy 4', desc:"desc3",images: ['/assets/__image3.png'], price: 50, quantity: 1 },
    ])


    const increaseQtyItem = (item: ICartItem) => {

        const newCartItemArray = cartItems?.map((ob) => {
            if (ob._id === item._id) {
                ob.quantity++
                return ob
            }
            return ob

        });
        setCartItems(newCartItemArray)
    }

    const updateQuantity = (quantity: number, item: ICartItem): void => {
        const newCartItemArray = cartItems?.map((ob) => {
            if (ob._id === item._id) {
                ob.quantity = quantity
                return ob
            }
            return ob
        });
        setCartItems(newCartItemArray)
    }

    const removeItem = (item: ICartItem) => {
        const newCartItemArray = cartItems?.filter((ob) => {
            return ob._id !== item._id
        });
        setCartItems(newCartItemArray)
    }


    return (<CartContext.Provider
        value={{
            cartItems,
            updateQuantity,
            removeItem

        }}>
        {props.children}
    </CartContext.Provider>
    )

}

