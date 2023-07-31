
type Props = {
    imageSrc:string
}

export const ClientsItem:React.FC<Props> = ({imageSrc}) => {
    return (
        <li className='clients__item'>
            <img className='clients__item-img' src={imageSrc} alt="img" />
        </li>
    )
}
