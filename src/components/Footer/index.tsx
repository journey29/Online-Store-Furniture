import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTumblr, faGoogle, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <ul className='footer__info'>
                <li className='footer__info-item'>
                    <a className='footer__logo' href="#">
                        <img src="//cdn.shopify.com/s/files/1/2588/1650/files/2017-12-20_8daae772-8940-4f12-86c5-9a5de1ce2c90_x200@2x.png?v=1613174152" alt="logo" />
                    </a>
                    <p className='footer__info-text'>Sagittis purus sit amet volutpat consequat.
                        At augue eget arcu dictum varius. Cursus sit amet dictum sit amet justo donec enim.</p>
                    <ul className='footer__social'>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </li>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <FontAwesomeIcon icon={faTumblr} />
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='footer__info-item'>
                    <h6 className='footer__info-title'>Footer menu</h6>
                    <ul className='footer__info-list'>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Help
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Delivery Information
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Privacy Policy
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Terms & Conditions
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Shipping Details
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='footer__info-item'>
                    <h6 className='footer__info-title'>Who We Are</h6>
                    <ul className='footer__info-list'>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Orders
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Gallery
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Store Location
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Testimonials
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='footer__info-item'>
                    <h6 className='footer__info-title'>Information</h6>
                    <ul className='footer__info-list'>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Workplace
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Settings
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Delivery
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Terms
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link' href="#">
                                Facilities
                            </a>
                        </li>
                    </ul>
                </li>
                <li className='footer__info-item'>
                    <h6 className='footer__info-title'>Contact</h6>
                    <ul className='footer__info-list'>
                        <li className='footer__list-item'>
                            <a className='footer__list-link address' href="#">
                                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link number' href="#">
                                0000 - 123 - 456789
                            </a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__list-link email' href="#">
                                info@example.com
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="footer__copyright">
                <ul className='footer__copyright-list'>
                    <li className='footer__copyright-item'>Help</li> 
                    <li className='footer__copyright-item'>Delivery Information</li> 
                    <li className='footer__copyright-item'>Privacy Policy</li> 
                    <li className='footer__copyright-item'>Terms & Condtions</li> 
                    <li className='footer__copyright-item'>Shiping Details © 2023 Furni</li> 
                    <li className='footer__copyright-item'>Design Themes</li>
                </ul>
            </div>

        </footer>
    )
}
