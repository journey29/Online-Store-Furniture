import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export const Discovery: React.FC = () => {
    const [discoveryPopapActive, setDiscoveryPopapActive] = useState<boolean>(false);
    return (
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
    )
}
