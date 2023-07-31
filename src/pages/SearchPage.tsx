import React, { useState } from 'react'
import {Cart, Header, Footer, Search, Breadcrumbs} from './index'
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
                <Search products={products} setProducts={setProducts}/>
            </main>
            <Footer />
        </>
    )
}

