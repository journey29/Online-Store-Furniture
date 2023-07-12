import React, { useState } from 'react'
import {Cart, Header, Footer, SearchItem, Filtration, Breadcrumbs} from './index'
import { useAppSelector } from 'hooks/redux';
import { IProduct } from 'types/types';

export const SearchPage: React.FC = () => {
    const { filteredItems } = useAppSelector(state => state.header)
    const [products, setProducts] = useState<IProduct[]>(filteredItems)

    return (
        <>
            <Header />
            <main>
                <Breadcrumbs title='Search' previousPage='Home' currentPage='Search' />
                <Cart />
                <section className='search'>
                    <div className="container">
                        <div className="search__content">
                            <Filtration products={products} setProducts={setProducts} />
                            <div className='search__items'>
                                {products.map(item =>
                                    <SearchItem item={item} key={item.id} />
                                )}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

