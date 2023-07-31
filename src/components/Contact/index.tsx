import { faPhone, faMailBulk, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { ContactItem } from './ContactItem'

export const Contact: React.FC = () => {
    return (
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
                            <ContactItem icon={faPhone} title='Phone' firstLink='Toll-Free: 0803 - 080 - 3081' secondLink='Fax: 0803 - 080 - 3082'/>
                            <ContactItem icon={faMailBulk} title='Address' firstLink='No: 58 A, East Madison Street,' secondLink='Baltimore, MD, USA 4508' />
                            <ContactItem icon={faAddressBook} title='Email' firstLink='mail@example.com' secondLink='support@example.com'/>
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
    )
}
