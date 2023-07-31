import {Contact, Cart, Header, Footer, Breadcrumbs} from './index'

export const ContactPage:React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs title='Contact' previousPage='Home' currentPage='Contact' />
                <Contact/>
            </main>
            <Footer />
        </>
    )
}
