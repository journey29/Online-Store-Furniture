import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'


export const Popup:React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(true)
    return (
        <div className={isActive ? 'popup active' : 'popup'}>
            <div className="popup__overlay">
                <div className="popup__content">
                    <h4 className="popup__content-title">Get 10% off</h4>
                    <p className="popup__content-text">Nulla tincidunt convallis bibendum. Duis sed risus cipit justo Integer neque felis, egestas a euismod in pulvinar.</p>
                    <form className="popup__content-form" action="https://formsubmit.co/furni642@gmail.com" method="POST">
                        <input className="popup__form-input" type="email" placeholder="Your email address" />
                        <button className="popup__form-btn">Subscribe</button>
                    </form>
                </div>
                <FontAwesomeIcon className="popup__close" icon={faClose} onClick={() => setIsActive(false)} />
            </div>
        </div>
    )
}
