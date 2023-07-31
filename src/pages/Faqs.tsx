import {FaqsList, Cart, Header, Footer, Breadcrumbs} from './index'

export const Faqs: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs previousPage='Home' currentPage="Faq's" title="Faq's" />
                <div className='questions'>
                    <div className="container">
                        <FaqsList/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
