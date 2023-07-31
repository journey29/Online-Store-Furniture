import ModalVideo from 'react-modal-video'
import { useState } from 'react';

export const About: React.FC = () => {
    const [aboutPopapActive, setAboutPopapActive] = useState<boolean>(false);
    return (
        <section className='about'>
            <div className="container">
                <div className="about__content">
                    <img className='about__content-img' src="//cdn.shopify.com/s/files/1/2588/1650/files/about3_1024x1024_f6c202f9-96db-4c9c-a533-5c6005569476.jpg?v=1613172408" alt="img" />
                    <div className='about__content-box'>
                        <img className='about__box-img' src="//cdn.shopify.com/s/files/1/2588/1650/files/logo1_300x300_c5441708-59bf-4063-b130-cd1d273b961f.png?v=1613172408" alt="logo" />
                        <span className='about__box-subtitle'>Who Are We?</span>
                        <h2 className='about__box-title'>WE EMPOWER ECOM SITES-THE
                            WORLD OVER</h2>
                        <p className='about__box-text'>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringiEtia sit
                            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                            bibendum sodales, augue velit cursus nunc.magna.</p>
                        <ModalVideo channel='youtube' isOpen={aboutPopapActive} videoId="iclLe7GECZ0" onClose={() => setAboutPopapActive(false)} />
                        <button className="about__box-btn" onClick={() => setAboutPopapActive(true)}>View Help Video</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
