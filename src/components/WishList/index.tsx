import { Link } from 'react-router-dom'
import { useAppSelector } from 'hooks/redux'
import { useAuth } from 'hooks/useAuth'
import { WishListItem } from './WishListItem'

export const WishList: React.FC = () => {
    const { wishListItems } = useAppSelector(state => state.wishlist)
    const { isAuth } = useAuth()

    return (
        <div className='wishlist'>
            <div className="wishlist__content">
                {wishListItems.length > 0
                    ? <table className='wishlist__items'>
                        <thead className='wishlist__items-head'>
                            <tr className='wishlist__items-headers'>
                                <th className='wishlist__items-header'>Image</th>
                                <th className='wishlist__items-header'>Product</th>
                                <th className='wishlist__items-header'>Price</th>
                                <th className='wishlist__items-header'>Purchase</th>
                                <th className='wishlist__items-header'>Remove</th>
                            </tr>
                        </thead>
                        <tbody className='wishlist__items-list'>
                            {wishListItems.map(item =>
                                <WishListItem item={item} />
                            )}
                        </tbody>
                    </table>
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

            </div>
        </div>
    )
}
