import React from 'react'
import { Header } from '../components/Header'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Footer } from '../components/Footer'
import { FaqsItem } from '../components/Faqs/FaqsItem'
import { Cart } from '../components/Cart'

export const Faqs:React.FC = () => {
    return (
        <>
            <Header />
            <Cart/>
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
            <Footer />
        </>
    )
}
