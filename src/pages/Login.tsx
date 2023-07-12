import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react'
import { useAppDispatch } from "hooks/redux"
import { setUser } from "store/slices/userSlice"
import { useNavigate } from "react-router-dom"
import { FormEvent } from 'react'
import {Cart, Header, Footer, Form, Breadcrumbs} from './index'


export const Login: React.FC = () => {
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleLogin = (e: FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    isAuth: true
                }))
                navigate('/account')
            }).catch(error => {
                setError(error.code)
            })
    }
    return (
        <>
            <Header />
            <main>
                <Cart />
                <Breadcrumbs title="Sign In" previousPage="Home" currentPage="Sign In" />
                <Form title="Sign In" text="Don't have an account yet?" link="registration" linkText="Sign Up" button="Sign In" authFunction={handleLogin} error={error} />
            </main>
            <Footer />
        </>
    )
}