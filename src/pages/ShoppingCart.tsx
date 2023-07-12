import React from 'react'
import {Cart, Header, Footer, ShoppingCartItem, Breadcrumbs} from './index'
import { useAppSelector } from 'hooks/redux'
import { useAuth } from 'hooks/useAuth'
import { Link } from 'react-router-dom'

export const ShoppingCart: React.FC = () => {
    const { cartItems } = useAppSelector(state => state.cart)
    const { isAuth } = useAuth()

    return (
        <>
            <Header />
            <main>
                <Breadcrumbs title='Your Shopping Cart' currentPage='Your Shopping Cart' previousPage='Home' />
                <Cart />
                <div className='shopping-cart'>
                    {cartItems.length > 0
                        ? <div className='shopping-cart__content'>
                            <table className='shopping-cart__items'>
                                <thead className='shopping-cart__items-head'>
                                    <tr className='shopping-cart__items-headers'>
                                        <th className='shopping-cart__items-header shopping-cart__product'>Product</th>
                                        <th className='shopping-cart__items-header shopping-cart__quantity'>Quantity</th>
                                        <th className='shopping-cart__items-header shopping-cart__total'>Total</th>
                                    </tr>
                                </thead>
                                <tbody className='shopping-cart__items-list'>
                                    {
                                        cartItems.map(item =>
                                            <ShoppingCartItem key={item.title} item={item} />
                                        )
                                    }
                                </tbody>
                            </table>
                            <Link className='shopping-cart__link' to="/shop">Continue Shopping</Link>
                        </div>
                        : isAuth
                            ? <div className='shopping-cart__empty'>
                                < h2 className='shopping-cart__empty-title'>Your cart is empty</h2>
                                <Link className='shopping-cart__empty-link' to="/">Continue shopping</Link>
                            </div >
                            : <div>
                                <div className='shopping-cart__empty'>
                                    < h2 className='shopping-cart__empty-title'>Your cart is empty</h2>
                                    <Link className='shopping-cart__empty-link' to="/">Continue shopping</Link>
                                </div >
                                <div className='shopping-cart__account'>
                                    <h2 className='shopping-cart__account-title'>Have an account?</h2>
                                    <p className='shopping-cart__account-text'><Link className='shopping-cart__account-link' to="/login">Log in</Link> to check out faster.</p>
                                </div>
                            </div>
                    }
                </div >
            </main>
            <Footer />
        </>
    )
}
