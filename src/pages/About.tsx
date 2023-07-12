import { useState } from 'react'
import { faPerson, faMoneyBill, faLeaf, faEarthAmericas, faGift, faGear, faPlay, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faYoutube, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Cart, Header, Footer, ActivitiesItem, ProfessionalsItem, Breadcrumbs} from './index'

export const About: React.FC = () => {
    const [aboutPopapActive, setAboutPopapActive] = useState<boolean>(false);
    const [discoveryPopapActive, setDiscoveryPopapActive] = useState<boolean>(false);
    const social: IconDefinition[] = [faFacebookF, faPinterestP, faYoutube, faTwitter]

    return (
        <>
            <Header />
            <Cart />
            <Breadcrumbs previousPage='Home' currentPage='About' title='About' />
            <main>
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
                <section className='activities'>
                    <div className="container">
                        <h2 className='activities__title'>WHAT WE <span>ARE DOING</span></h2>
                        <p className='activities__text'>Includes Business as well as Professionals</p>
                        <div className="activities__content">
                            <ActivitiesItem title="Experts In Ecommerce" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faPerson} />
                            <ActivitiesItem title="End To End Solutions" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faMoneyBill} />
                            <ActivitiesItem title="SEO Support For Clients" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faLeaf} />
                            <ActivitiesItem title="Online Marketing Support" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faEarthAmericas} />
                            <ActivitiesItem title="Easy to Customize" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faGear} />
                            <ActivitiesItem title="24/7 Support For Themes" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faGift} />
                        </div>
                    </div>
                </section>
                <section className='discovery'>
                    <div className="container">
                        <div className="discovery__content">
                            <div className='discovery__content-box'>
                                <h2 className='discovery__box-title'>Try Our One Month Free <span>Trial And See For Yourself!</span></h2>
                                <p className='discovery__box-text'>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                                    sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                            </div>
                            <ModalVideo channel='youtube' isOpen={discoveryPopapActive} videoId="VQOJaYUPZR8" onClose={() => setDiscoveryPopapActive(false)} />
                            <button className="discovery__content-btn" onClick={() => setDiscoveryPopapActive(true)}>View Help Video</button>
                        </div>
                    </div>
                </section>
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
                <section className='professionals'>
                    <div className="container">
                        <ul className="professionals__list">
                            <ProfessionalsItem job='Procurement' name='Boyd Kelly' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t1_1024x1024_ff8180bb-b8a0-4103-b228-7d6cfa9f3f3c_800x.jpg?v=1613172406' />
                            <ProfessionalsItem job='Online Billing' name='Tasha Elliott' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t2_1024x1024_b8155bee-eb1f-4999-9bdd-75521c7aec12_800x.jpg?v=1613172406' />
                            <ProfessionalsItem job='Customer Care' name='Nathan Wolfe' social={social} img='//cdn.shopify.com/s/files/1/2588/1650/files/t3_1024x1024_a256c437-2310-4def-b690-85b4ca076153_800x.jpg?v=1613172406' />
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

