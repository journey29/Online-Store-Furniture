import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { IProduct, ICart, IWishItem } from 'types/types';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { getRandomNumber } from 'utils/getRandomNumber';
import { generateRandomNumber } from 'utils/generateRandomNumber';
import { useAppDispatch } from 'hooks/redux';
import { setCartItems} from 'store/slices/cartSlice';
import { setWishListItems} from 'store/slices/wishlistSlice';


type Props = {
    isActive: boolean
    item: IProduct,
    setIsActive: (state: boolean) => void
}


export const ProductPopup:React.FC<Props> = ({ setIsActive, isActive, item }) => {
    const dispatch = useAppDispatch();
    const setItemsInCart = (state: ICart) => dispatch(setCartItems(state));
    const setItemsInWishlist = (state:IWishItem)=>dispatch(setWishListItems(state))
    const [randomNumber, setRandomNumber] = useState<number>(getRandomNumber());
    const [initValue, setInitialValue] = useState<number>(generateRandomNumber(20));
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomNumber(getRandomNumber());
        }, 5000);

        const randomNumberId = setInterval(() => {
            setInitialValue(generateRandomNumber(20));
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearInterval(randomNumberId);
        };
    }, []);

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: number = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue <= 1000 && newValue > 0) {
            setQuantity(newValue);
        } else {
            setQuantity(1);
        }
    };

    const minusBtn = (): void => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return (
        <div className={isActive ? 'product-popup__overlay active' : 'product-popup__overlay'}>
            <div className='product-popup'>
                <div className='product-popup__info-top'>
                    <img className='product-popup__info-img' src={item.imageUrl} alt="img" />
                    <button className='product-popup__info-btn' onClick={() => setIsActive(false)}>
                        <FontAwesomeIcon style={{ height: "20px" }} className='product-popup__info-icon' icon={faClose} />
                    </button>
                    <div className='product-popup__info-details'>
                        <h3 className='product-popup__info-title'>{item.title}</h3>
                        <div className='product-popup__info-sales'>
                            <FontAwesomeIcon className='product-popup__sales-icon' icon={faFireFlameCurved} />
                            <p className='product-popup__sales-text'>Sold <span>{randomNumber}</span> products in last {Math.floor(Math.random() * randomNumber) + 1} Hours</p>
                        </div>
                        <div className='product-popup__info-price'>
                            <span className='product-popup__info-label'>Price:</span>
                            <span>${item.price}.00</span>
                        </div>
                        <div className='product-popup__info-material'>
                            <span className='product-popup__info-label'>Material:</span>
                            <div className='product-popup__material-tabs'>
                                {Object.keys(item.material).map(material =>
                                    <div className='product-popup__material-tab' key={material}>
                                        <input className='product-popup__material-input' type="checkbox" id={material} disabled={item['material'][material]} />
                                        <label className='product-popup__material-trigger' htmlFor={material}>
                                            <button className='product-popup__material-btn'>{material[0].toUpperCase() + material.slice(1)}</button>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='product-popup__info-style'>
                            <span className='product-popup__info-label'>Style:</span>
                            <div className='product-popup__style-tabs'>
                                {Object.keys(item.style).map(style =>
                                    <div className='product-popup__style-tab' key={style}>
                                        <input className='product-popup__style-input' type="checkbox" id={style} disabled={item['style'][style]} />
                                        <label className='product-popup__style-trigger' htmlFor={style}>
                                            <button className='product-popup__style-btn'>{style[0].toUpperCase() + style.slice(1)}</button>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='product-popup__info-vendor'>
                            <span className='product-popup__info-label'>Vendor:</span>
                            <a className='product-popup__vendor-link' href='#'>{item.vendor}</a>
                        </div>
                        <div className='product-popup__info-type'>
                            <span className='product-popup__info-label'>Type:</span>
                            <a className='product-popup__type-link' href='#'>{item.type}</a>
                        </div>
                        <div className='product-popup__info-availability'>
                            <span className='product-popup__info-label'>Availability:</span>
                            <span className='product-popup__availability-link'>{item.available ? 'Available' : 'Not Available'}</span>
                        </div>
                        <div className='product-popup__info-quantity'>
                            <span className='product-popup__info-label'>Quantity:</span>
                            <div className='product-popup__quantity-modifier'>
                                <button className='plus' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                <input className='product-popup__quantity-input' type="text" value={quantity} onChange={e => changeInput(e)} />
                                <button className='minus' onClick={minusBtn}>-</button>
                            </div>
                        </div>
                        <div className='product-popup__info-tabs'>
                            <button className='product-popup__info-tab' onClick={() => setItemsInCart({title:item.title, price:item.price, img:item.imageUrl, inputValue:1, info:item.info})}>Add to Cart</button>
                            <button className='product-popup__info-tab' onClick={() => setItemsInWishlist({title:item.title, img:item.imageUrl, price:item.price, added:true})}> Add to Wishlist</button>
                        </div>
                        <div className='product-popup__info-viewers'>
                            <div className='product-popup__viewers-box'>
                                <FontAwesomeIcon style={{ height: "14px" }} className='product-popup__viewers-icon' icon={faEye} />
                                <span className='product-popup__viewers-quantity'>{initValue}</span>
                            </div>
                            <p className='product-popup__viewers-text'>People are viewing this right now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
