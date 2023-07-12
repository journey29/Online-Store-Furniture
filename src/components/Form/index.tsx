import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FormEvent } from 'react'
type Props = {
    title: string,
    text: string
    button: string,
    link: string,
    linkText: string
    authFunction: (e: FormEvent<HTMLFormElement>, email: string, pass: string) => void
    error: string
}

export const Form:React.FC<Props> = ({ title, button, link, linkText, text, authFunction, error }) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    return (
        <section className="form">
            <div className="form__content">
                <h4 className="form__title">{title}</h4>
                <div className="form__account-box">
                    <span className="form__account-text">{text}</span>
                    <Link className="form__account-link" to={`/${link}`}>{linkText}</Link>
                </div>
                <form className="form__form" onSubmit={e => authFunction(e, email, pass)}>
                    <input className="form__input" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
                    <input className="form__input" value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="Password" required />
                    <button className="form__btn" type='submit'>{button}</button>
                    <p>{error}</p>
                </form>
            </div>
        </section>
    )
}

