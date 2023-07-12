import { useState } from 'react';
import { ICart, IProduct, IWishItem } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCartItems } from "store/slices/cartSlice";
import { setWishListItems } from "store/slices/wishlistSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import EmptyHeart from 'assets/icons/empty-heart.svg';
import EmptyCart from 'assets/icons/empty-cart.svg';
import { ProductPopup } from 'components/ProductPopup';

type Props = {
    item: IProduct;
};

export const CollectionItem:React.FC<Props> = ({ item }) => {
    const { cartItems } = useAppSelector(state => state.cart);
    const { wishListItems } = useAppSelector(state => state.wishlist);
    const dispatch = useAppDispatch();
    const setItemsInCart = (state: ICart) => dispatch(setCartItems(state));
    const setItemsInWishlist = (state: IWishItem) => dispatch(setWishListItems(state))
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className="collection__item" key={item.id}>
                <img className="collection__item-img" src={item.imageUrl} alt="img" />
                <div className="collection__item-content">
                    <h6 className="collection__item-title">{item.title}</h6>
                    <p className="collection__item-price">${item.price}.00</p>
                </div>
                <div className="collection__item-buttons">
                    <button className="collection__item-btn" onClick={() => setItemsInCart({ title: item.title, img: item.imageUrl, price: item.price, inputValue: 1, info: item.info })}>
                        {cartItems.some((cartItem: ICart) => cartItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="collection__btn-img" icon={faCartShopping} />
                        ) : (
                            <img className="collection__btn-img" src={EmptyCart} alt="icon" />
                        )}
                    </button>
                    <button className="collection__item-btn" onClick={() => setItemsInWishlist({ title: item.title, img: item.imageUrl, price: item.price, added: true })}>
                        {wishListItems.some((wishItem: IWishItem) => wishItem.title === item.title) ? (
                            <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="collection__btn-img" icon={faHeart} />
                        ) : (
                            <img className="collection__btn-img" src={EmptyHeart} alt="icon" />
                        )}
                    </button>
                    <button className="collection__item-btn eye" onClick={() => setIsActive(true)}>
                        <FontAwesomeIcon style={{ width: "20px", height: "20px" }} className="collection__btn-img" icon={faEye} />
                    </button>
                </div>
            </div>
            {isActive && <ProductPopup isActive={isActive} item={item} setIsActive={setIsActive} />}
        </>
    );
};
