import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { removeWishListItem } from '../../store/wishlistSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hooks/useAuth'

export const WishList: React.FC = () => {
    const { wishListItems } = useAppSelector(state => state.wishlist)
    const dispatch = useAppDispatch();
    const deleteWishListItem = (state: string) => dispatch(removeWishListItem(state))
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
                                <div key={item.title}>
                                    <tr className='wishlist__item'>
                                        <td className='wishlist__item-column'>
                                            <img className='wishlist__item-img' src={item.img} alt="img" />
                                        </td>
                                        <td className='wishlist__item-column'>
                                            <a className='wishlist__item-title' href="">{item.title}</a>
                                        </td>
                                        <td className='wishlist__item-column'>
                                            <span className='wishlist__item-price'>${item.price}.00</span>
                                        </td>
                                        <td className='wishlist__item-column'>
                                            <Link className='wishlist__item-options' to={`/product/${item.title.replaceAll(' ', '-').toLowerCase()}`}>Select Options</Link>
                                        </td>
                                        <td className='wishlist__item-column'>
                                            <button className='wishlist__item-btn'>
                                                <FontAwesomeIcon style={{ height: "25px" }} className='wishlist__item-close' icon={faClose} onClick={() => deleteWishListItem(item.title)} />
                                            </button>
                                        </td>
                                    </tr>
                                </div>
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
