import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

export const HeaderMenu:React.FC = () => {
    return (
        <nav className="header__menu">
            <ul className="header__menu-list">
                <li><Link className="header__menu-link" to="/">Home</Link></li>
                <li className="header__menu-shop">
                    <div className="header__shop-titlebox">
                        <Link className="header__menu-link" to="/shop">Shop</Link>
                        <FontAwesomeIcon style={{ height: "14px" }} className="header__titlebox-icon" icon={faArrowDown} />
                    </div>
                    <ul className="header__shop-sublist">
                        <li>
                            <h6 className="header__sublist-title">Living Room Sets</h6>
                            <ul className="header__menu-subsublist">
                                <li><Link to="/product/amet-kalfort">Amet Kalfort</Link></li>
                                <li><Link to="/product/armchair"> Armchair</Link></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="header__sublist-title">Benches</h6>
                            <ul className="header__menu-subsublist">
                                <li><Link to="/product/ullamco-cillum">Ullamco cillum</Link></li>
                                <li><Link to="/product/fuastick-chair">Fuastick chair</Link></li>
                                <li><Link to="/product/broomstick-chair">Broomstick chair</Link></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="header__sublist-title">Coffe table</h6>
                            <ul className="header__menu-subsublist">
                                <li><Link to="/product/hetal-enterprises-chair"> Hetal Enterprises Chair</Link></li>
                                <li><Link to="/product/interior-leatherette-chair">Interior Leatherette Chair</Link></li>
                                <li><Link to="/product/muren-durable-table">Muren Durable Table</Link> </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="header__sublist-title">Living</h6>
                            <ul className="header__menu-subsublist">
                                <li><Link to="/product/ladder-roswell-solid-wood-table"> Ladder Roswell Solid Wood Table</Link></li>
                                <li><Link to="/product/leather-office-chair">Leather Office Chair</Link></li>
                                <li><Link to="/product/regentseating-chair">Regentseating Chair</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="header__menu-pages">
                    <div className="header__pages-titlebox">
                        <a className="header__menu-link" href="#">Pages</a>
                        <FontAwesomeIcon style={{ height: "14px" }} className="header__titlebox-icon" icon={faArrowDown} />
                    </div>
                    <ul className="header__pages-sublist">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/news">Blog</Link></li>
                        <li><Link to="/faqs">Faq's</Link></li>
                    </ul>
                </li>
                <li><Link className="header__menu-link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
