import { Form } from "../components/Form"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Cart } from "../components/Cart"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react"
import { useAppDispatch } from "../hooks/redux"
import { setUser } from "../store/userSlice"
import { Cookies } from "../components/Cookies"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export function SignUp() {
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleSignUp = (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    isAuth: false
                }));
                navigate('/login')
            })
            .catch(e => {
                setError(e.code)
            })
    };

    return (
        <>
            <Header />
            <Cart />
            <Cookies />
            <Breadcrumbs title="Create Account" previousPage="Home" currentPage="Create Account" />
            <Form title="Sign Up" authFunction={handleSignUp} text="Already have an account?" button="Sign Up" link="login" linkText="Sign In" error={error} />
            <Footer />
        </>
    )
}
