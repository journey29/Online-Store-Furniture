import {Cart, Header, Footer, WishList, Breadcrumbs} from './index'

export const WishlistPage: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs title='WishList' previousPage='Home' currentPage='WishList' />
                <WishList />
            </main>
            <Footer />
        </>
    )
}
