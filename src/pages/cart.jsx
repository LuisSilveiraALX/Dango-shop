import { Navbar } from "@/components/navbar/navbar";
import { Data } from "@/components/card/Data";
import {Card2} from "@/components/card/card";
import { ShopContext } from "@/context/shop-context";
import { useContext } from "react";

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return (
        <>
        <Navbar />
        <div className="cart">
            <div className="cartitems">
                {Data.map((val, id) => {
                if (cartItems[val.id] !== 0) {
                    return <Card2 imageUrl={val.Image} id={val.id} title={val.title} price={val.price} description={val.description}/>
                }
                })}
                {totalAmount > 0 ? (
                <div className="price__container">
                <p className="p__subtotal"> Subtotal: ${totalAmount} </p>
                </div>
            ) : (
                <h1 className="title__products"> Your Shopping Cart is Empty</h1>
            )}
            </div>
        </div>
        </>
    )
}

export default Cart