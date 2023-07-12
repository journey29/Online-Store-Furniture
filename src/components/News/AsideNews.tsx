import { AsideSlider } from "components/Aside/AsideSlider"
import { useEffect, useState } from 'react'
import { INews } from "types/types"
import { Link } from "react-router-dom"
import { useGetNewsQuery } from "store/api/products.api"

export const AsideNews: React.FC = () => {
    const [recentNews, setRecentNews] = useState<INews[]>([])
    const { data, error } = useGetNewsQuery({})

    useEffect(() => {
        if (data) {
            setRecentNews(data)
        } else if (error) {
            console.error('Error:', error)
        }
    }, [data])
    return (
        <aside className='sidebar-news'>
            <div className="sidebar-news__recent">
                <h4 className='sidebar-news__recent-title'>Recent Article</h4>
                <ul className='sidebar-news__recent-list'>
                    {recentNews.map(item =>
                        <li className='sidebar-news__recent-item' key={item.id}>
                            <img className='sidebar-news__item-img' src={item.image} alt="img" />
                            <div className='sidebar-news__item-content'>
                                <Link className='sidebar-news__item-title' to={`/news/post/${item.title.replaceAll(' ', '-')}`}>{item.title}...</Link>
                                <p className='sidebar-news__item-text'>{item.asideDescription}...</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className="sidebar__slider">
                <h3 className='sidebar__item-title'>Best Sellers</h3>
                <AsideSlider />
            </div>
        </aside>
    )
}
