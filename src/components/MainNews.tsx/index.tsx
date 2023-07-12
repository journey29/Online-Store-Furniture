import { useEffect, useState } from "react"
import { INews } from "types/types"
import { Link } from "react-router-dom"
import { useGetLimitNewsQuery } from "store/api/products.api"

export const MainNews:React.FC = () => {
    const [news, setNews] = useState<INews[]>([])
    const { data, error } = useGetLimitNewsQuery({ limit: '3', page: '1' })
    useEffect(() => {
        if (data) {
            setNews(data)
        } else if (error) {
            console.error('Error:', error)
        }
    }, [data])
    return (
        <section className='main-news'>
            <div className="container">
                <div className="main-news__text-box">
                    <span className='main-news__text'>Just In Now</span>
                    <h3 className='main-news__title'>Our Recent News</h3>
                </div>
                <ul className='main-news__items'>
                    {news.map(item =>
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
                    )}
                </ul>
            </div>
        </section>
    )
}
