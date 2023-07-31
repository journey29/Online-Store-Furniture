import {Cart, Header, Footer, Breadcrumbs, Account} from './index'

export const AccountPage: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs currentPage="Account" previousPage="Home" title="Account" />
                <Account/>
            </main>
            <Footer />
        </>
    )
}

