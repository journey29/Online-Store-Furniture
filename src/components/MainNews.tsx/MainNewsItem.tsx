import { Link } from "react-router-dom"
import { INews } from "types/types"

type Props = {
    item:INews
}

export const MainNewsItem: React.FC<Props> = ({item}) => {
    return (
        <li key={item.id} className='main-news__item'>
            <img className='main-news__img' src={item.image} alt="img" />
            <div className='main-news__content'>
                <div className='main-news__content-info'>
                    <span className='main-news__content-author'>{item.author}</span> |
                    <span className='main-news__content-date'>{item.date}</span>
                </div>
                <h4 className='main-news__content-title'>{item.title}</h4>
                <p className='main-news__content-text'>{item.description}</p>
                <Link className='main-news__content-link' to={`/news/post/${item.title.replaceAll(' ', '-').toLowerCase()}`}>Read More</Link>
            </div>
        </li>
    )
}
