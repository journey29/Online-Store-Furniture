import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
    title: string,
    text: string
}

export const FaqsItem:React.FC<Props> = ({ title, text }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <div className={isActive ? 'questions__item active' : 'questions__item'}>
            <div className='questions__item-title'  onClick={() => setIsActive(!isActive)}>
                <p className='questions__item-trigger'>{title}</p>
                <FontAwesomeIcon className='questions__content-arrow' icon={faArrowDown} />
            </div>
            <div className='questions__item-content'>
                <p className='questions__content-text'>{text}</p>
            </div>
        </div>
    )
}
