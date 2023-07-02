import React, { useState} from 'react'
import { Header } from '../components/Header';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';
import { Filtration } from '../components/Filtration';
import { Cart } from '../components/Cart';
import { Cookies } from '../components/Cookies';
import { SearchItem } from '../components/Search/SearchItem';
import { useAppSelector } from '../hooks/redux';
import { IProduct } from '../types/types';

export const SearchPage: React.FC = () => {
    const { filteredItems} = useAppSelector(state => state.header)
    const [products, setProducts] = useState<IProduct[]>(filteredItems)
    
    return (
        <>
            <Header />
            <Breadcrumbs title='Search' previousPage='Home' currentPage='Search' />
            <Cart />
            <Cookies />
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
            <Footer />
        </>
    )
}

