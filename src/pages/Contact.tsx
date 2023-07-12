import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import {Cart, Header, Footer, Breadcrumbs} from './index'

export const Contact:React.FC = () => {
    return (
        <>
            <Header />
            <main>

                <Cart />
                <Breadcrumbs title='Contact' previousPage='Home' currentPage='Contact' />
                <div className='contact'>
                    <div className="contact__container">
                        <div className="contact__content">
                            <div className='contact__info'>
                                <iframe
                                    className='contact__info-map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06229579414!2d-74.30932913378582!3d40.69701928228265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1686422349792!5m2!1sru!2sua"
                                    width="600"
                                    height="450"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <ul className='contact__info-list'>
                                    <li className='contact__info-item'>
                                        <FontAwesomeIcon className='contact__info-icon' icon={faPhone} />
                                        <div className='contact__item-social'>
                                            <h5 className='contact__social-title'>Phone</h5>
                                            <div className='contact__social-box'>
                                                <p className='contact__social-item'>Toll-Free: 0803 - 080 - 3081</p>
                                                <p className='contact__social-item'>Fax: 0803 - 080 - 3082</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='contact__info-item'>
                                        <FontAwesomeIcon className='contact__info-icon' icon={faMailBulk} />
                                        <div className='contact__item-social'>
                                            <h5 className='contact__social-title'>Address</h5>
                                            <div className='contact__social-box'>
                                                <p className='contact__social-item'>No: 58 A, East Madison Street,</p>
                                                <p className='contact__social-item'>Baltimore, MD, USA 4508</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='contact__info-item'>
                                        <FontAwesomeIcon className='contact__info-icon' icon={faAddressBook} />
                                        <div className='contact__item-social'>
                                            <h5 className='contact__social-title'>Email</h5>
                                            <div className='contact__social-box'>
                                                <a className='contact__social-item' href='mailto:mail@example.com'>mail@example.com</a>
                                                <a className='contact__social-item' href='mailto:support@example.com'>support@example.com</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form className='contact__form' action="https://formsubmit.co/furni642@gmail.com" method="POST">
                                <h3 className='contact__form-title'>Contact Form</h3>
                                <div className='contact__form-inputs'>
                                    <input className='contact__input' type="text" placeholder='Name' />
                                    <input className='contact__input' type="email" placeholder='Email' />
                                    <input className='contact__input' type="tel" placeholder='Phone Number' />
                                </div>
                                <textarea className='contact__textarea' placeholder='Comment'></textarea>
                                <button className='contact__btn'>Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
