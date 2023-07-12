import { useState, useEffect,ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import { IProduct, ICart, IWishItem } from 'types/types';
import { getRandomNumber } from 'utils/getRandomNumber';
import { generateRandomNumber } from 'utils/generateRandomNumber';
import { formatDate } from 'utils/formatDate';
import { useAppDispatch } from 'hooks/redux';
import { setCartItems } from 'store/slices/cartSlice';
import { setWishListItems } from 'store/slices/wishlistSlice';
import { useChangeProductItemMutation } from 'store/api/products.api';

type Props = {
    product: IProduct[],
}

export const ProductItem:React.FC<Props> = ({ product}) => {
    const dispatch = useAppDispatch();
    const setItemsInCart = (state: ICart) => dispatch(setCartItems(state));
    const setItemsInWishlist = (state: IWishItem) => dispatch(setWishListItems(state))
    const [activeBottomTab, setActiveBottomTab] = useState<number>(0);
    const [randomNumber, setRandomNumber] = useState<number>(getRandomNumber());
    const [initValue, setInitialValue] = useState<number>(generateRandomNumber(20));
    const [quantity, setQuantity] = useState<number>(1);
    const [formActive, setFormActive] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        title: ''
    });
    const [addReview, { isError }] = useChangeProductItemMutation()

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

    const addReviewHandler = async (e: React.FormEvent<HTMLFormElement>):Promise<void>=> {
        e.preventDefault();
        if (formData.email && formData.name && formData.title) {
            setFormData({
                name:'',
                email:'',
                message:'',
                title:''
            })
            const newReview = {
                id: Date.now().toString(),
                reviewTitle: formData.title,
                reviewBody: formData.message,
                authorName: formData.name,
                reviewRating: 5,
                authorEmail: formData.email,
                reviewDate: formatDate()
            };
            const updatedReviews = [...product[0].reviews, newReview];
            const updatedProduct = { ...product[0], reviews: updatedReviews }
            await addReview({ body: updatedProduct, id: updatedProduct.id })
        }else if(isError){
            console.error('Error:', isError)
        }
    };

    const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: number = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue <= 1000 && newValue > 0) {
            setQuantity(newValue);
        } else {
            setQuantity(1);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const minusBtn = (): void => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    return (
        <>
            {
                product.map(item =>
                    <div className="product__info" key={item.title}>
                        <div className='product__info-top'>
                            <img className='product__info-img' src={item.imageUrl} alt="img" />
                            <div className='product__info-details'>
                                <h3 className='product__info-title'>{item.title}</h3>
                                <div className='product-popup__info-sales'>
                                    <FontAwesomeIcon className='product-popup__sales-icon' icon={faFireFlameCurved} />
                                    <p className='product-popup__sales-text'>Sold <span>{randomNumber}</span> products in last {Math.floor(Math.random() * randomNumber) + 1} Hours</p>
                                </div>
                                <div className='product__info-price'>
                                    <span className='product__info-label'>Price:</span>
                                    <span>${item.price}.00</span>
                                </div>
                                <div className='product__info-material'>
                                    <span className='product__info-label'>Material:</span>
                                    <div className='product__material-tabs'>
                                        {Object.keys(item.material).map(material =>
                                            <div className='product__material-tab' key={material}>
                                                <input className='product__material-input' type="checkbox" id={material} disabled={item['material'][material]} />
                                                <label className='product__material-trigger' htmlFor={material}>
                                                    <button className='product__material-btn'>{material[0].toUpperCase() + material.slice(1)}</button>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='product__info-style'>
                                    <span className='product__info-label'>Style:</span>
                                    <div className='product__style-tabs'>
                                        {Object.keys(item.style).map(style =>
                                            <div className='product__style-tab' key={style}>
                                                <input className='product__style-input' type="checkbox" id={style} disabled={item['style'][style]} />
                                                <label className='product__style-trigger' htmlFor={style}>
                                                    <button className='product__style-btn'>{style[0].toUpperCase() + style.slice(1)}</button>
                                                </label>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className='product__info-vendor'>
                                    <span className='product__info-label'>Vendor:</span>
                                    <a className='product__vendor-link' href='#'>{item.vendor}</a>
                                </div>
                                <div className='product__info-type'>
                                    <span className='product__info-label'>Type:</span>
                                    <span className='product__type-text'>{item.type}</span>
                                </div>
                                <div className='product__info-availability'>
                                    <span className='product__info-label'>Availability:</span>
                                    <span className='product__availability-text'>{item.available ? 'Available' : 'Not Available'}</span>
                                </div>
                                <div className='product__info-quantity'>
                                    <span className='product__info-label'>Quantity:</span>
                                    <div className='product__quantity-modifier'>
                                        <button className='plus' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                        <input className='product__quantity-input' type="text" value={quantity} onChange={e => handleQuantityInput(e)} />
                                        <button className='minus' onClick={minusBtn}>-</button>
                                    </div>
                                </div>
                                <div className='product__info-tabs'>
                                    <button className='product__info-tab' onClick={() => setItemsInCart({ title: item.title, price: item.price, img: item.imageUrl, info:item.info, inputValue: quantity })}>Add to Cart</button>
                                    <button className='product__info-tab' onClick={() => setItemsInWishlist({ title: item.title, img: item.imageUrl, price: item.price, added: true })}>Add to Wishlist</button>
                                </div>
                                <div className='product__info-viewers'>
                                    <div className='product__viewers-box'>
                                        <FontAwesomeIcon style={{ height: "14px" }} icon={faEye} />
                                        <span className='product__viewers-quantity'>{initValue}</span>
                                    </div>
                                    <p className='product__viewers-text'>People are viewing this right now</p>
                                </div>
                            </div>
                        </div>
                        <div className='product__info-bottom'>
                            <div className='product__bottom-tabs'>
                                <button className={activeBottomTab === 0 ? 'product__bottom-tab active' : 'product__bottom-tab'} onClick={() => setActiveBottomTab(0)}>Product Description</button>
                                <button className={activeBottomTab === 1 ? 'product__bottom-tab active' : 'product__bottom-tab'} onClick={() => setActiveBottomTab(1)}>Additional Information</button>
                                <button className={activeBottomTab === 2 ? 'product__bottom-tab active' : 'product__bottom-tab'} onClick={() => setActiveBottomTab(2)}>Reviews</button>
                            </div>
                            <div className='product__bottom-content'>
                                {activeBottomTab === 0 &&
                                    <div className='product__bottom-desc'>
                                        <p className='product__desc-info'>Furniture functions well as a circulatory and practical component of interior design. It is a piece of industrial or handcrafted art that supports the human activity. Our furniture is distinctive with the elements of design such as shape,
                                            form, color, and texture. The furniture we provide is plush and provides the utmost comfort.
                                        </p>
                                        <dl className='product__desc-content'>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Chair:</dt>
                                                <dd className='product__desc-text'>These chairs are made with an ergonomic design for comfort and style. Its thin, tapering legs contribute to its ability to save space while simultaneously providing solidity and support. These chairs are best suitable for offices, living rooms, and bedrooms as they give noiseless movement. These chairs have
                                                    luxurious upholstery in a variety of contemporary colors, which screams comfort and style. </dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Product Dimensions:</dt>
                                                <dd className='product__desc-text'>96.0 cm x 60.0 cm x 59.0 cm</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Material:</dt>
                                                <dd className='product__desc-text'>Wood, Iron, plastic, vinyl, Leather, Knitted material, Mesh fabric</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Color:</dt>
                                                <dd className='product__desc-text'>Pink, orange, brown, black, white, and red</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Warranty:</dt>
                                                <dd className='product__desc-text'>1 year</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Height:</dt>
                                                <dd className='product__desc-text'>Standart</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Table:</dt>
                                                <dd className='product__desc-text'>These tables are made of engineered wood with rounded corners which is safe for use.
                                                    Our table's uncluttered design and simple lines stimulate coziness.
                                                    Its sleek design help to keep your workspace tidy. It's stylishly modern and ideal for both students and workaholics.
                                                    For daily care wipe with a soft and dry cloth.
                                                </dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Product Dimensions:</dt>
                                                <dd className='product__desc-text'>47.5 x 23.5 x 28.25</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Material:</dt>
                                                <dd className='product__desc-text'>47.5 x 23.5 x 28.25</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Color:</dt>
                                                <dd className='product__desc-text'>Brown, Black</dd>
                                            </div>

                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Height:</dt>
                                                <dd className='product__desc-text'>27 kg</dd>
                                            </div>
                                            <div className='product__desc-item'>
                                                <dt className='product__desc-title'>Thickness:</dt>
                                                <dd className='product__desc-text'>1</dd>
                                            </div>
                                        </dl>
                                    </div>
                                }
                                {activeBottomTab === 1 &&
                                    <div className='product__additional-items'>
                                        <div className='product__additional-item'>
                                            <h4 className='product__additional-title'>Returns Policy</h4>
                                            <p className='product__additional-text'>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
                                            <p className='product__additional-text'>You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).</p>
                                            <p className='product__additional-text'>If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.</p>
                                        </div>
                                        <div className='product__additional-item'>
                                            <h4 className='product__additional-title'>Shipping</h4>
                                            <p className='product__additional-text'>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
                                            <p className='product__additional-text'>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
                                            <p className='product__additional-text'>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>
                                        </div>
                                    </div>
                                }
                                {!!item.reviews.length && activeBottomTab === 2 &&
                                    <div className='product__bottom-reviews'>
                                        <h3 className='product__reviews-title'>Customer Reviews</h3>
                                        <div className='product__reviews-total'>
                                            <div className='product__total-content'>
                                                <span className='product__review-rating'></span>
                                                <span className='product__total-based'>Based on {item.reviews.length} reviews</span>
                                            </div>
                                            <button className='product__total-btn' onClick={() => setFormActive(!formActive)}>Write a review</button>
                                        </div>
                                        <form className={formActive ? 'product__reviews-form active' : 'product__reviews-form'} onSubmit={addReviewHandler} >
                                            <h4 className='product__form-title'>Write a review</h4>
                                            <label className='product__form-label'>
                                                Name
                                                <input className='product__form-input' type="text" placeholder='Enter your name' id='name' value={formData.name} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Email
                                                <input className='product__form-input' type="email" placeholder='john.smith@example.com' id='email' value={formData.email} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Review Title
                                                <input className='product__form-input' type="text" placeholder='Give your review a title' id='title' value={formData.title} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Body of Review
                                                <textarea className='product__form-textarea' placeholder='Write your comments here' id='message' value={formData.message} onChange={handleInputChange}></textarea>
                                            </label>
                                            <button className='product__form-btn' type='submit'>Submit Review</button>
                                        </form>
                                        <div className='product__reviews-list'>
                                            {item.reviews.map(review =>
                                                <div className='product__reviews-item' key={review.id}>
                                                    <span className='product__review-rating'></span>
                                                    <h4 className='product__review-title'>{review.reviewTitle}</h4>
                                                    <p className='product__review-author'>{review.authorName} <span>on</span> {review.reviewDate} </p>
                                                    <p className='product__review-body'>{review.reviewBody}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                }
                                {!item.reviews.length && activeBottomTab === 2 ?
                                    <div className='product__bottom-reviews'>
                                        <h3 className='product__reviews-title'>Customer Reviews</h3>
                                        <div className='product__reviews-total'>
                                            <div className='product__total-content'>
                                                <span className='product__review-rating'></span>
                                                <span className='product__total-based'>There are no reviews yet</span>
                                            </div>
                                            <button className='product__total-btn' onClick={() => setFormActive(!formActive)}>Write a review</button>
                                        </div>
                                        <form className={formActive ? 'product__reviews-form active' : 'product__reviews-form'}  onSubmit={addReviewHandler}>
                                            <h4 className='product__form-title'>Write a review</h4>
                                            <label className='product__form-label'>
                                                Name
                                                <input className='product__form-input' type="text" placeholder='Enter your name' id='name' value={formData.name} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Email
                                                <input className='product__form-input' type="email" placeholder='john.smith@example.com' id='email' value={formData.email} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Review Title
                                                <input className='product__form-input' type="text" placeholder='Give your review a title' id='title' value={formData.title} onChange={handleInputChange} />
                                            </label>

                                            <label className='product__form-label'>
                                                Body of Review
                                                <textarea className='product__form-textarea' placeholder='Write your comments here' id='message' value={formData.message} onChange={handleInputChange}></textarea>
                                            </label>
                                            <button className='product__form-btn' type='submit'>Submit Review</button>
                                        </form>
                                    </div>
                                    : <></>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}



