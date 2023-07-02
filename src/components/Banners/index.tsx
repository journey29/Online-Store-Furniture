export const Banners:React.FC = () => {
    return (
        <div className='banners'>
            <div className="container">
                <div className="banners__content">
                    <div className='banners__content-item first'>
                        <div className='banners__item-textbox'>
                            <h3 className='banners__item-title'>BEST OFFERS</h3>
                            <p className='banners__item-text'>from</p>
                            <a className='banners__item-link' href='#'>15% Off</a>
                        </div>
                    </div>
                    <div className='banners__content-item second'>
                        <div className='banners__item-textbox'>
                            <h3 className='banners__item-title'>Stylish Interior Sofas</h3>
                            <a className='banners__item-link' href='#'>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

