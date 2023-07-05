import { useNavigate } from "react-router-dom"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { useAppDispatch} from "../hooks/redux"
import { useAuth } from "../hooks/useAuth"
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../store/userSlice"
import { Cart } from "../components/Cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Cookies } from "../components/Cookies"

export const Account:React.FC = () => {
    const { email } = useAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const logOut = async () => {
        const auth = getAuth()
        await signOut(auth).then(() => console.log('logout successfull'))
        dispatch(setUser({
            isAuth: false
        }))
        navigate('/account')
    }

    return (
        <>
            <Header />
            <Cart />
            <Cookies/>
            <Breadcrumbs currentPage="Account" previousPage="Home" title="Account" />
            <section className="account">
                <div className="account__content">
                    <div className="account__logout">
                        <h3 className="account__logout-title">
                            Account
                        </h3>
                        <div className="account__logout-linkbox">
                            <FontAwesomeIcon className="account__linkbox-icon" icon={faUser} />
                            <button className="account__linkbox-link" onClick={logOut}>Log out</button>
                        </div>
                    </div>
                    <div className="account__info">
                        <div className="account__info-order">
                            <h4 className="account__order-title">Order History</h4>
                            <p className="account__order-text">You haven't placed any orders yet.</p>
                        </div>
                        <div className="account__info-details">
                            <h4 className="account__details-title">Account Details</h4>
                            <p className="account__details-email">{email}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

