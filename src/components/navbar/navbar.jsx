import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ShopContext } from "@/context/shop-context";
import { useContext } from "react";
import Link from "next/link";

export const Navbar = () => {
  const { getTotalItems } = useContext(ShopContext);
  const shoppingCart = getTotalItems();
  return (
    <div className="navbar">
        <div className="navbar__container">
                <Link href='/' className='link'>DangoShop</Link>
                <Link href='/cart'><AiOutlineShoppingCart className="button__cart" size={32}/>
                    {!!shoppingCart && (<div className='div__cart'>
                      <p className='span__p'>
                    {shoppingCart}</p>
                    </div>)}
                </Link>
        </div>
    </div>
  );
};