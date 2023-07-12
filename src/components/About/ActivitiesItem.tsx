import {IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    title:string,
    text:string,
    icon:IconProp
}

export const ActivitiesItem:React.FC<Props> = ({title, text, icon}) => {
    return (
        <div className='activities__content-item'>
            <FontAwesomeIcon className='activities__item-img' icon={icon} />
            <div className='activities__item-box'>
                <h5 className='activities__item-title'>{title}</h5>
                <p className='activities__item-text'>{text}</p>
            </div>
        </div>
    )
}
