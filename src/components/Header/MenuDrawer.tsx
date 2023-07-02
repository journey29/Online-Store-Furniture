import { useState } from 'react'
import { faFacebook, faInstagram, faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faClose, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../hooks/useAuth';

type Props = {
    menuActive: boolean,
    setMenuActive: (state: boolean) => void
}


export const MenuDrawer = ({ menuActive, setMenuActive }: Props) => {
    const { isAuth } = useAuth()
    const [shopActive, setShopActive] = useState<boolean>(false)
    const [pagesActive, setPagesActive] = useState<boolean>(false)
    return (
        <div className={menuActive ? "menu-drawer active" : "menu-drawer"}>
            <button className="menu-drawer__close" onClick={() => setMenuActive(false)}>
                <FontAwesomeIcon style={{ height: "25px", cursor: 'pointer' }} icon={faClose} />
            </button>
            <div className="menu-drawer__content">
                <nav className="menu-drawer__navigation">
                    <ul className="menu-drawer__menu">
                        <li className="menu-drawer__menu-item"><Link className="menu-drawer__item-title" to="/">Home</Link></li>
                        <li className="menu-drawer__menu-item" onClick={() => setShopActive(true)}>
                            <div className="menu-drawer__item-titlebox">
                                <h6 className="menu-drawer__item-title">Shop</h6>
                                <FontAwesomeIcon className="menu-drawer__item-icon" icon={faArrowRight} />
                            </div>

                            <div className={shopActive ? 'menu-drawer__sublist-content active' : 'menu-drawer__sublist-content'} onClick={e => e.stopPropagation()}>
                                <div className="menu-drawer__sublist-back" onClick={() => setShopActive(false)}>
                                    <FontAwesomeIcon className="menu-drawer__sublist-icon" icon={faArrowLeft} />
                                    <p className="menu-drawer__back-text">Shop</p>
                                </div>
                                <ul className="menu-drawer__shop-sublist">
                                    <li className="menu-drawer__sublist-item">
                                        <h6 className="menu-drawer__sublist-title">Living Room Sets</h6>
                                        <ul className="menu-drawer__subsublist">
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/amet-kalfort">Amet Kalfort</Link>
                                            </li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/armchair">Armchair</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-drawer__sublist-item">
                                        <h6 className="menu-drawer__sublist-title">Benches</h6>
                                        <ul className="menu-drawer__subsublist">
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/ullamco-cillum">Ullamco cillum</Link>
                                            </li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/fuastick-chair">Fuastick chair</Link>
                                            </li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/broomstick-chair">Broomstick chair</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-drawer__sublist-item">
                                        <h6 className="menu-drawer__sublist-title">Coffe Table</h6>
                                        <ul className="menu-drawer__subsublist">
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/hetal-enterprises-chair">Hetal Enterprises Chair</Link></li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/interior-leatherette-chair">Interior Leatherette Chair</Link></li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/muren-durable-table">Muren Durable Table</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-drawer__sublist-item">
                                        <h6 className="menu-drawer__sublist-title">Living</h6>
                                        <ul className="menu-drawer__subsublist">
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/ladder-roswell-solid-wood-table">Ladder Roswell Solid Wood Table</Link>
                                            </li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/leathe-office-chair">Leather Office Chair</Link>
                                            </li>
                                            <li className="menu-drawer__subsublist-item">
                                                <Link className="menu-drawer__subsublist-link" to="/product/regentseating-chair">Regentseating Chair</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="menu-drawer__sublist-utility">
                                    <div className="menu-drawer__utility-account">
                                        <FontAwesomeIcon className="menu-drawer__account-icon" icon={faUser} />
                                        {isAuth
                                            ? <Link className="menu-drawer__account-link" to="/account">Log Out</Link>
                                            : <Link className="menu-drawer__account-link" to="/login">Log in</Link>
                                        }
                                    </div>
                                    <ul className="menu-drawer__utility-social">
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTwitter} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTumblr} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faFacebook} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faInstagram} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                        <li className="menu-drawer__menu-item" onClick={() => setPagesActive(true)}>
                            <div className="menu-drawer__item-titlebox">
                                <h4 className="menu-drawer__item-title">Pages</h4>
                                <FontAwesomeIcon className="menu-drawer__item-icon" icon={faArrowRight} />
                            </div>
                            <div className={pagesActive ? "menu-drawer__sublist-content active" : 'menu-drawer__sublist-content'} onClick={e => e.stopPropagation()}>
                                <div className="menu-drawer__sublist-back" onClick={() => setPagesActive(false)}>
                                    <FontAwesomeIcon className="menu-drawer__sublist-icon" icon={faArrowLeft} />
                                    <p className="menu-drawer__back-text">Pages</p>
                                </div>
                                <ul className="menu-drawer__pages-sublist">
                                    <li className="menu-drawer__sublist-item">
                                        <Link className="menu-drawer__sublist-link" to="/about">About</Link>
                                    </li>
                                    <li className="menu-drawer__sublist-item">
                                        <Link className="menu-drawer__sublist-link" to="/news">Blog</Link>
                                    </li>
                                    <li className="menu-drawer__sublist-item">
                                        <Link className="menu-drawer__sublist-link" to="/faqs">Faq's</Link>
                                    </li>
                                </ul>
                                <div className="menu-drawer__sublist-utility">
                                    <div className="menu-drawer__utility-account">
                                        <FontAwesomeIcon className="menu-drawer__account-icon" icon={faUser} />
                                        {isAuth
                                            ? <Link className="menu-drawer__account-link" to="/account">Log Out</Link>
                                            : <Link className="menu-drawer__account-link" to="/login">Log in</Link>
                                        }
                                    </div>
                                    <ul className="menu-drawer__utility-social">
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTwitter} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTumblr} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faFacebook} />
                                        </li>
                                        <li className="menu-drawer__social-item">
                                            <FontAwesomeIcon className="menu-drawer__social-icon" icon={faInstagram} />
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </li>
                        <li className="menu-drawer__menu-item"><Link className="menu-drawer__item-title" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="menu-drawer__sublist-utility">
                <div className="menu-drawer__utility-account">
                    <FontAwesomeIcon className="menu-drawer__account-icon" icon={faUser} />
                    {isAuth
                        ? <Link className="menu-drawer__account-link" to="/account">Log Out</Link>
                        : <Link className="menu-drawer__account-link" to="/login">Log in</Link>
                    }
                </div>
                <ul className="menu-drawer__utility-social">
                    <li className="menu-drawer__social-item">
                        <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTwitter} />
                    </li>
                    <li className="menu-drawer__social-item">
                        <FontAwesomeIcon className="menu-drawer__social-icon" icon={faTumblr} />
                    </li>
                    <li className="menu-drawer__social-item">
                        <FontAwesomeIcon className="menu-drawer__social-icon" icon={faFacebook} />
                    </li>
                    <li className="menu-drawer__social-item">
                        <FontAwesomeIcon className="menu-drawer__social-icon" icon={faInstagram} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
