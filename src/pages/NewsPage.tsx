import React, { useEffect, useState } from 'react'
import { INews } from 'types/types'
import { useGetNewsQuery } from 'store/api/products.api'
import {Cart, Header, Footer, Loader, Breadcrumbs, AsideNews, NewsMain} from './index'

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
                    <main>
                        <Cart />
                        <Breadcrumbs previousPage='Home' currentPage='News' title='News' />
                        <div className='news'>
                            <div className="container">
                                <div className="news__content">
                                    <AsideNews />
                                    <NewsMain currentPage={currentPage} totalNews={totalNews} setCurrentPage={setCurrentPage} />
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </>

            }
        </>
    )
}
