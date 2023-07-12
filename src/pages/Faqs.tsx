import React from 'react'
import {Cart, Header, Footer, FaqsItem, Breadcrumbs} from './index'

export const Faqs: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs previousPage='Home' currentPage="Faq's" title="Faq's" />
                <div className='questions'>
                    <div className="container">
                        <div className="questions__list">
                            <FaqsItem title='What is your return policy?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
                            <FaqsItem title='How can i get support?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
                            <FaqsItem title='How to redeem my gift card?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
                            <FaqsItem title='How do i pay for my purchase?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
