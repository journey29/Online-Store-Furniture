import { Breadcrumbs } from "../components/Breadcrumbs"
import { Cart } from "../components/Cart"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { useAppDispatch } from "../hooks/redux"
import { setUser } from "../store/userSlice"
import { useNavigate } from "react-router-dom"
import { Form } from "../components/Form"
import { Cookies } from "../components/Cookies";
import {FormEvent} from 'react'


export const Login: React.FC = () => {
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleLogin = (e:FormEvent<HTMLFormElement>,email: string, password: string) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    isAuth: true
                }))
                navigate('/account')
                
                
            }).catch(error => {
                setError(error.code)
                console.log(error.code);
                
            })
    }
    return (
        <>
            <Header />
            <Cart />
            <Cookies/>
            <Breadcrumbs title="Sign In" previousPage="Home" currentPage="Sign In" />
            <Form title="Sign In" text="Don't have an account yet?" link="registration" linkText="Sign Up" button="Sign In" authFunction={handleLogin} error={error} />
            <Footer />
        </>
    )
}