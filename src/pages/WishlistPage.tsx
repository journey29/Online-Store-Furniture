import { Cart } from '../components/Cart';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WishList } from '../components/WishList';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Cookies } from '../components/Cookies';

export const WishlistPage: React.FC = () => {
    return (
        <>
            <Header />
            <Cart />
            <Cookies />
            <Breadcrumbs title='WishList' previousPage='Home' currentPage='WishList' />
            <WishList />
            <Footer />
        </>
    )
}
