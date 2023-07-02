import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { AsideNews } from '../components/News/AsideNews'
import { NewsMain } from '../components/News/NewsMain'
import { Loader } from '../components/Loader'
import { INews } from '../types/types'
import { Cart } from '../components/Cart'
import { useGetNewsQuery } from '../store/api/products.api'
import { Cookies } from '../components/Cookies'
import { Footer } from '../components/Footer'

export const News: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalNews, setTotalNews] = useState<INews[]>([])
    const { data, error, isLoading } = useGetNewsQuery({})

    useEffect(() => {
        if (data) {
            setTotalNews(data);
        } else if (error) {
            console.error('Error:', error)
        }
    }, [currentPage, data])
    
    return (
        <>
            {isLoading
                ? <Loader />
                : <>
                    <Header />
                    <Cart />
                    <Breadcrumbs previousPage='Home' currentPage='News' title='News' />
                    <Cookies/>
                    <div className='news'>
                        <div className="container">
                            <div className="news__content">
                                <AsideNews />
                                <NewsMain currentPage={currentPage} totalNews={totalNews} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </>

            }
        </>
    )
}
