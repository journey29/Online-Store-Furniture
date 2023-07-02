import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import EmptyHeart from '../../assets/icons/empty-heart.svg'
import EmptyCart from '../../assets/icons/empty-cart.svg'
import { ICart, IProduct, IWishItem } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setWishListItems} from '../../store/wishlistSlice';
import { setCartItems } from '../../store/cartSlice';
import { useState } from 'react'
import { ProductPopup } from '../ProductPopup';

type Props = {
    item: IProduct
}

export const SearchItem = ({ item }: Props) => {
    const { wishListItems } = useAppSelector(state => state.wishlist);
    const { cartItems } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const setItemsInCart = (state: ICart) => dispatch(setCartItems(state));
    const setItemsInWishlist = (state:IWishItem)=>dispatch(setWishListItems(state))
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className="search__item">
                <img className="search__item-img" src={item.imageUrl} alt="img" />
                <div className="search__item-content">
                    <h6 className="search__item-title">{item.title}</h6>
                    <p className="search__item-price">${item.price}.00</p>
                </div>
                <div className="search__item-buttons">
                    <button className="search__item-btn" onClick={() => setItemsInCart({title:item.title, price:item.price, img:item.imageUrl, inputValue:1})}>
                        {cartItems.some((cartItem: ICart) => cartItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="search__btn-img" icon={faCartShopping} />
                        ) : (
                            <img className="search__btn-img" src={EmptyCart} alt="icon" />
                        )}
                    </button>
                    <button className="search__item-btn" onClick={() => setItemsInWishlist({title:item.title, img:item.imageUrl, price:item.price, added:true})}>
                        {wishListItems.some((wishItem: IWishItem) => wishItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="search__btn-img" icon={faHeart} />
                        ) : (
                            <img className="search__btn-img" src={EmptyHeart} alt="icon" />
                        )}
                    </button>
                    <button className="search__item-btn eye" onClick={() => setIsActive(true)}>
                        <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="search__btn-img" icon={faEye} />
                    </button>
                </div>
            </div>
            {isActive && <ProductPopup isActive={isActive} item={item} setIsActive={setIsActive} />}
        </>
    )
}
