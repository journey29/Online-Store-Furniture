import { faBagShopping, faUser, faHeart, faPhone, faEnvelope, faLocationDot, faTruck, faBars } from "@fortawesome/free-solid-svg-icons";
import { setIsActive } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState, useCallback, ChangeEvent} from 'react'
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/types";
import { setFilterInput, setFilteredItems } from "../../store/headerSlice";
import { debounce } from 'lodash'
import { HeaderMenu } from "./HeaderMenu";
import { MenuDrawer } from "./MenuDrawer";
import { useGetProductsQuery } from "../../store/api/products.api";



export const Header: React.FC = () => {
    const { isAuth } = useAuth();
    const { cartItems } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const setIsActiveHandler = () => dispatch(setIsActive(true));
    const setFilteredInput = (state: string) => dispatch(setFilterInput(state));
    const setSearchFilteredItems = (state: IProduct[]) => dispatch(setFilteredItems(state))
    const [searchItems, setSearchItems] = useState<IProduct[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const { data } = useGetProductsQuery({})
    const navigate = useNavigate();

    const updateSearchItems = useCallback(
        debounce((str: string) => {
            if (data) {
                const filteredItems = data.filter(item => item.title.toLowerCase().includes(str.toLowerCase()))
                setSearchItems(filteredItems)
                setFilteredInput(str)
                setSearchFilteredItems(filteredItems)
            }
        }, 300),
        []
    );

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.target.value);
        updateSearchItems(e.target.value);
    }

    const onSearchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/search')
    };

    const navigateToProduct = (title: string): void => {
        navigate(`/product/${title.replaceAll(' ', '-').toLowerCase()}`);
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__container">
                    <div className="header__top-content">
                        <div className="header__top-contact">
                            <a className="header__top-number" href="tel:0000123456789">
                                <FontAwesomeIcon icon={faPhone} />
                                0000 - 123 - 456789
                            </a>
                            <a className="header__top-email" href="mailto:info@example.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                                info@example.com
                            </a>
                        </div>
                        <div className="header__top-info">
                            <a className="header__top-location" href="#">
                                <FontAwesomeIcon icon={faLocationDot} />
                                Store Location</a>
                            <a className="header__top-order" href="#">
                                <FontAwesomeIcon icon={faTruck} />
                                Track Your Order</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__container">
                    <div className="header__bottom-content">
                        <Link className="logo" to="/">
                            <img src="//cdn.shopify.com/s/files/1/2588/1650/files/logo_1.png?v=1645766911" alt="logo" />
                        </Link>
                        <div className="header__bottom-search">
                            <form className="header__bottom-form">
                                <input className="header__bottom-input" type="search" placeholder="Search" value={searchValue} onChange={onChangeInput} />
                                <button type="submit" className="header__bottom-button" onClick={onSearchBtn}>
                                    <FontAwesomeIcon className="header__search-icon" style={{ height: "18px", padding: "0" }} icon={faSearch} />
                                </button>
                            </form>
                            <div className="header__bottom-products">
                                {searchValue &&
                                    <div className="header__products-content">
                                        {searchItems.length > 0
                                            ? <>
                                                <h6 className="header__products-title">Products</h6>
                                                <ul className="header__products-list">
                                                    {searchItems.map(item =>
                                                        <li className="header__products-item" key={item.title}>
                                                            <img className="header__products-img" src={item.imageUrl} alt="img" />
                                                            <div className="header__products-descbox">
                                                                <h4 className="header__descbox-title" onClick={() => navigateToProduct(item.title)}>{item.title}</h4>
                                                                <p className="header__descbox-price">${item.price}.00</p>
                                                            </div>
                                                        </li>)}
                                                </ul>
                                                <Link className="header__products-search" to="/search">
                                                    <span className="header__search-text">Search for "{searchValue}"</span>
                                                    <FontAwesomeIcon className="header__search-icon" icon={faArrowRight} />
                                                </Link>

                                            </>
                                            : <Link className="header__products-search" to="/search">
                                                <span className="header__search-text">Search for "{searchValue}"</span>
                                                <FontAwesomeIcon className="header__search-icon" icon={faArrowRight} />
                                            </Link>
                                        }
                                    </div>

                                }
                            </div>

                        </div>
                        <MenuDrawer menuActive={menuActive} setMenuActive={setMenuActive} />
                        <div className="header__bottom-usercontent">
                            <button className="header__usercontent-btn" onClick={() => setMenuActive(!menuActive)}>
                                <FontAwesomeIcon style={{ height: "20px" }} className="header__usercontent-icon menu" icon={faBars} />
                            </button>
                            {isAuth
                                ? <Link className="header__bottom-link account" to="/account">
                                    <FontAwesomeIcon style={{ height: "20px" }} className="header__usercontent-icon" icon={faUser} />
                                </Link>
                                : <Link className="header__bottom-link account" to="/login">
                                    <FontAwesomeIcon style={{ height: "20px" }} className="header__usercontent-icon" icon={faUser} />
                                </Link>
                            }
                            <button className="header__bottom-link" onClick={setIsActiveHandler}>
                                <FontAwesomeIcon style={{ height: "20px" }} className="header__usercontent-icon" icon={faBagShopping} />
                                <div className="header__cart-items">{cartItems?.length}</div>
                            </button>
                            <Link className="header__bottom-link" to="/wishlist">
                                <FontAwesomeIcon style={{ height: "20px" }} className="header__usercontent-icon" icon={faHeart} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__container">
                <HeaderMenu />
            </div>
        </header>
    )
}
