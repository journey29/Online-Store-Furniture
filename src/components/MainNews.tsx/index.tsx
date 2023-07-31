import { useEffect, useState } from "react"
import { INews } from "types/types"
import { useGetLimitNewsQuery } from "store/api/products.api"
import { MainNewsItem } from "./MainNewsItem"

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
                        <MainNewsItem key={item.id} item={item}/>
                    )}
                </ul>
            </div>
        </section>
    )
}
