import {AiOutlineShoppingCart} from 'react-icons/ai'
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container">
                <Link href='/' className='link'>DangoShop</Link>
                <Link href='/cart'><AiOutlineShoppingCart className="button__cart" size={32}/></Link>
        </div>
    </div>
  );
};