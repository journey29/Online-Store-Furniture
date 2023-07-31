import {Cart, Header, Footer, ShoppingCart, Breadcrumbs} from './index'

export const ShoppingCartPage: React.FC = () => {

    return (
        <>
            <Header />
            <main>
                <Breadcrumbs title='Your Shopping Cart' currentPage='Your Shopping Cart' previousPage='Home' />
                <Cart />
                <ShoppingCart/>
            </main>
            <Footer />
        </>
    )
}
