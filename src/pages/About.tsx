import { Cart, Header, Footer, Breadcrumbs, Activities, Discovery, Info, Professionals } from './index'

export const About: React.FC = () => {

    return (
        <>
            <Header />
            <Cart />
            <Breadcrumbs previousPage='Home' currentPage='About' title='About' />
            <main>
                <About />
                <Activities />
                <Discovery />
                <Info />
                <Professionals />
            </main>
            <Footer />
        </>

    )
}

