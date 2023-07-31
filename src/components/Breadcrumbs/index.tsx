import { bigFirst } from "utils/bigFirst"
type Props = {
    title: string,
    previousPage?: string,
    currentPage: string | undefined
}

export const Breadcrumbs:React.FC<Props> = ({ title, currentPage, previousPage }) => {
    currentPage = currentPage?.replaceAll('-', ' ')
    currentPage = bigFirst(currentPage)
    
    return (
        <div className='breadcrumbs'>
            <div className="container">
            <h2 className="breadcrumbs__title">{title}</h2>

            {previousPage
                ? <div className='breadcrumbs__info'>
                    <span className='breadcrumbs__info-item'>{previousPage}</span> /
                    <span className='breadcrumbs__info-item'>{currentPage}</span>
                </div>
                : <span className='breadcrumbs__info-item'>{currentPage}</span>
            }
            </div>

        </div>
    )
}
