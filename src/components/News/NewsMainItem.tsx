import { Link } from 'react-router-dom'
import { INews } from 'types/types'

type Props = {
    item: INews
}

export const NewsMainItem: React.FC<Props> = ({ item }) => {
    return (
        <div className='news__main-item' key={item.id}>
            <img className='news__item-img' src={item.image} alt="img" />
            <div className='news__item-content'>
                <div className='news__content-info'>
                    <span className='news__content-author'>{item.author}</span> |
                    <span className='news__content-date'>{item.date}</span>
                </div>
                <h4 className='news__content-title'>{item.title}</h4>
                <p className='news__content-text'>{item.description}</p>
                <Link className='news__content-link' to={`/news/post/${item.title.replaceAll(' ', '-').toLowerCase()}`}>Read More</Link>
            </div>
        </div>
    )
}
