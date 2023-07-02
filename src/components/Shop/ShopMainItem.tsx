import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart, faEye } from "@fortawesome/free-solid-svg-icons"
import { IWishItem, ICart, IProduct } from "../../types/types"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setWishListItems} from "../../store/wishlistSlice"
import { setCartItems } from "../../store/cartSlice"
import { Link } from "react-router-dom"
import { ProductPopup } from "../ProductPopup"
import EmptyHeart from '../../assets/icons/empty-heart.svg'
import EmptyCart from '../../assets/icons/empty-cart.svg'

type Props = {
    productView: string,
    item: IProduct
}

export const ShopMainItem = ({ productView, item }: Props) => {
    const { cartItems } = useAppSelector(state => state.cart);
    const { wishListItems } = useAppSelector(state => state.wishlist);
    const dispatch = useAppDispatch();
    const setItemsInCart = (state: ICart) => dispatch(setCartItems(state));
    const setItemsInWishlist = (state:IWishItem)=>dispatch(setWishListItems(state))
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={productView === 'grid' ? 'shop__main-item' : 'shop__list-item'} key={item.title}>
                <img className={productView === 'grid' ? 'shop__item-img' : 'shop__list-img'} src={item.imageUrl} alt="img" />
                <div className={productView === 'grid' ? 'shop__item-content' : 'shop__list-content'}>
                    <Link className='shop__item-title' to={`/product/${item.title.replaceAll(' ', '-').toLowerCase()}`}>{item.title}</Link>
                    <p className='shop__item-price'>${item.price}.00</p>
                </div>
                <div className='shop__item-buttons'>
                    <button className="shop__item-btn" onClick={() => setItemsInCart({title:item.title, price:item.price, img:item.imageUrl, inputValue:1})}>
                        {cartItems.some((cartItem: ICart) => cartItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="shop__btn-img" icon={faCartShopping} />
                        ) : (
                            <img className="shop__btn-img" src={EmptyCart} alt="icon" />
                        )}
                    </button>
                    <button className="shop__item-btn" onClick={() => setItemsInWishlist({title:item.title, img:item.imageUrl, price:item.price, added:true})}>
                        {wishListItems.some((wishItem: IWishItem) => wishItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="shop__btn-img" icon={faHeart} />
                        ) : (
                            <img className="shop__btn-img" src={EmptyHeart} alt="icon" />
                        )}
                    </button>
                    <button className="shop__item-btn eye" onClick={() => setIsActive(true)}>
                        <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="shop__btn-img" icon={faEye} />
                    </button>
                </div>
                {isActive && <ProductPopup isActive={isActive} item={item} setIsActive={setIsActive} />}
            </div>
        </>
    )
}
