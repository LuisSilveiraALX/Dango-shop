import Image from 'next/image';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context'

const Card = ({
    id,
        imageUrl,
            title,
                price,
                description,    
                    }) => {

                const [productTitle, setProductTitle] = useState(title);
                const [fontSize, setFontSize] = useState(15);
                
                const { cartItems, addToCart, handleAmountChange } =
                useContext(ShopContext);
                const cartItemAmount = cartItems[id]

                const handleTitleChange = (e) => {
                    setProductTitle(e.target.value);
                };

                const handleFontSizeChange = (e) => {
                    const newSize = e.target.value;
                    setFontSize(newSize);
                  };

                return (
                <div className="product__container">
                <div className='image__container'>
                    <Image
                    className="product__image"
                    src={imageUrl}
                    alt={productTitle}
                    />
                </div>
                <h1 style={{ fontSize: `${fontSize}px` }}>{productTitle}</h1> 
                <input
                    type="range"
                    min="12"
                    max="20"
                    step="1"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <input
                    type="text"
                    value={productTitle}
                    onChange={handleTitleChange} 
                    className='input__name'
                />

                <div className="amount__container">
                    <h2>${price}</h2>
                    <input className='input__number' type="number" value={cartItemAmount} readOnly/>
                </div>

                <div className="description__container">
                    <p>{description}</p>
                </div>

                <div className="button__container">
                    <button className='button' onClick={() => addToCart(id)}>
                    Add to cart 
                    </button>
                </div>
                </div>

                )
            }


  export const Card2 = ({
        id,
            imageUrl,
                title,
                    price,
                    description,    
                        }) => {

                    const [productTitle, setProductTitle] = useState(title);
                    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
                    useContext(ShopContext);

                    return (
                        <div className="cartItem">
                                <Image
                                    src={imageUrl}
                                    alt={productTitle}
                                />
                        <div className="description__cart">
                          <p>
                            <b className='shopping-cart__title'>{productTitle}</b>
                          </p>
                            <p className='shopping-cart__description'>
                                {description}
                            </p>
                          <p className='p__price'>${price}</p>
                          <div className="countHandler">
                            <button onClick={() => removeFromCart(id)}> - </button>
                            <input
                              value={cartItems[id]}
                              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                            />
                            <button onClick={() => addToCart(id)}> + </button>
                          </div>
                        </div>
                      </div>
                    )
                }


export default Card
