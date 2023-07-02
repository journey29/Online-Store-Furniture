import { Link } from "react-router-dom"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const NotFound:React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title="404 Not Found" currentPage="404 Not Found" previousPage="Home" />
            <section className="not-found">
                <p className="not-found__error">404</p>
                <h2 className="not-found__title">404 The Page You're Looking For Can't Found</h2>
                <p className="not-found__text">You didn't break the internet, but we can't find what you are looking for</p>
                <Link className="not-found__link" to="/">Back to home</Link>
            </section>
            <Footer />
        </>
    )
}
