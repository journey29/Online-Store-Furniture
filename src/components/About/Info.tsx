import ModalVideo from 'react-modal-video';
import { useState } from 'react';
import {faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Info: React.FC = () => {
    const [aboutPopapActive, setAboutPopapActive] = useState<boolean>(false);
    return (
        <section className='info'>
            <div className="container">
                <div className="info__content">
                    <div className='info__content-box'>
                        <img className='info__box-img' src="//cdn.shopify.com/s/files/1/2588/1650/files/logo1_300x300_c5441708-59bf-4063-b130-cd1d273b961f.png?v=1613172408" alt="logo" />
                        <span className='info__box-subtitle'>Who Are We?</span>
                        <h2 className='info__box-title'>WE EMPOWER ECOM SITES-THE
                            WORLD OVER</h2>
                        <p className='info__box-text'>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringiEtia sit
                            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                            bibendum sodales, augue velit cursus nunc.magna.</p>
                        <ModalVideo channel='youtube' isOpen={aboutPopapActive} videoId="iclLe7GECZ0" onClose={() => setAboutPopapActive(false)} />
                        <button className="info__box-btn" onClick={() => setAboutPopapActive(true)}>View Help Video</button>
                    </div>
                    <div className='info__content-img'>
                        <ModalVideo channel='youtube' isOpen={aboutPopapActive} videoId="iclLe7GECZ0" onClose={() => setAboutPopapActive(false)} />
                        <button className='info__img-btn' onClick={() => setAboutPopapActive(true)}>
                            <FontAwesomeIcon icon={faPlay} style={{ width: "30px", height: "30px" }} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
