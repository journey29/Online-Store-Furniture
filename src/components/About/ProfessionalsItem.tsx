import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    name: string,
    job: string,
    social: IconProp[],
    img: string
}

export const ProfessionalsItem = ({ img, name, job, social }: Props) => {
    return (
        <li className="professionals__item">
            <img className='professionals__item-img' src={img} alt="img" />
            <p className='professionals__item-name'>{name}</p>
            <span className='professionals__item-job'>{job}</span>
            <div className='professionals__item-social'>
                {social.map((icon, index) =>
                    <button key={index}>
                        <FontAwesomeIcon icon={icon} className='professionals__social-item' />
                    </button>
                )}
            </div>
        </li>
    )
}
