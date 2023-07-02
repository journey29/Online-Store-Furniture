import { useEffect, useState } from "react";
interface ICookies {
    getItem: (item: string) => string | undefined;
    setItem: (item: string, value: string) => void;
}

export const Cookies:React.FC = () => {
    const [hidden, setHidden] = useState<boolean>(false)
    const consentPropertyName = 'furni_consent';
    const cookieStorage: ICookies = {
        getItem: (item) => {
            const cookies = document.cookie
                .split(';')
                .map((cookie) => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {} as Record<string, string>); // Add type annotation here

            return cookies[item.trim()];
        },
        setItem: (item, value) => {
            document.cookie = `${item}=${value};`;
        },
    };
    const storageType = cookieStorage;
    const shouldShowPopup = (storage: ICookies) => !storageType.getItem(consentPropertyName);
    const saveToStorage = (consentPropertyName: string) => storageType.setItem(consentPropertyName, 'true');
    const declineToStorage = (consentPropertyName: string) => storageType.setItem(consentPropertyName, 'false');
    const acceptFn = () => {
        saveToStorage(consentPropertyName);
        setHidden(true)
    }
    const declineFn = () => {
        declineToStorage(consentPropertyName);
        setHidden(true)
    }
    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            setHidden(false)
        }, 2000);
    }

    useEffect(() => {
        const consent = cookieStorage.getItem(consentPropertyName);
        setHidden(consent === "true" || consent === "false");
    }, [])

    return (
        <div className={hidden ? 'cookies' : 'cookies active'}>
            <p className="cookies__text">Please click Accept Cookies to continue to use the site.</p>
            <div className="cookies__buttons">
                <button className="cookies__btn" onClick={acceptFn}>Accept</button>
                <button className="cookies__btn" onClick={declineFn}>Decline</button>
            </div>
        </div>
    );
};