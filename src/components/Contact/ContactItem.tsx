import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    icon:IconProp,
    title:string,
    firstLink:string,
    secondLink:string
}

export const ContactItem:React.FC<Props> = ({icon, title, firstLink, secondLink}) => {
    return (
        <li className='contact__info-item'>
            <FontAwesomeIcon className='contact__info-icon' icon={icon} />
            <div className='contact__item-social'>
                <h5 className='contact__social-title'>{title}</h5>
                <div className='contact__social-box'>
                    <p className='contact__social-item'>{firstLink}</p>
                    <p className='contact__social-item'>{secondLink}</p>
                </div>
            </div>
        </li>
    )
}
