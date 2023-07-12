import { CartItem } from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setIsActive } from 'store/slices/cartSlice';
import { Link } from 'react-router-dom';

export const Cart: React.FC = () => {
    const { cartItems, isActive } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const setIsActiveHandler = (isActive: boolean) => dispatch(setIsActive(isActive))

    return (
        cartItems.length === 0 ? (
            <div className={isActive ? 'cart active' : 'cart'}>
                <div className="cart__overlay" onClick={() => setIsActiveHandler(false)}>
                    <div className="cart__popup" onClick={e => e.stopPropagation()}>
                        <div className='cart__popup-close' onClick={() => setIsActiveHandler(false)}>X</div>
                        <h6 className="cart__title">Your Cart</h6>
                        <p className="cart__price-info">Your cart is currently empty.</p>
                        <div className="cart__buttons">
                            <Link className="cart__shopping-link" to="/shop" onClick={()=>setIsActiveHandler(false)}>Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={isActive ? 'cart active' : 'cart'} >
                <div className="cart__overlay" onClick={() => setIsActiveHandler(false)}>
                    <div className="cart__popup" onClick={e => e.stopPropagation()}>
                        <div className='cart__popup-close' onClick={() => setIsActiveHandler(false)}>
                            <FontAwesomeIcon style={{height:"20px"}} icon={faClose}/>
                        </div>
                        <h6 className="cart__title">Your Cart</h6>
                        <ul className="cart__items">
                            {cartItems.map(item =>
                                <CartItem key={item.title} title={item.title} price={item.price} img={item.img} value={item.inputValue} info={item.info} />
                            )}
                        </ul>
                        <div className="cart__price">
                            <div className="cart__price-box">
                                <h6 className="cart__price-title">Total</h6>
                                <p className="cart__price-payment">${cartItems.reduce((acc, item) => acc + (item.price * item.inputValue), 0)}.00</p>
                            </div>
                            <p className="cart__price-info">Shipping, taxes, and discounts will be calculated at checkout.</p>
                        </div>
                        <div className="cart__buttons">
                            <Link className="cart__view-link" to="/shopping-cart" onClick={()=>setIsActiveHandler(false)}>View Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
