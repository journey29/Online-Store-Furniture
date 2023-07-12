import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { IProduct } from 'types/types'
import { useGetProductsQuery } from 'store/api/products.api'
import {Cart, Header, Footer, Aside, ProductItem, Loader, Breadcrumbs} from './index'

export const Product: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct[]>([]);
    const { data, isLoading, error } = useGetProductsQuery({ title: id?.replaceAll('-', ' ') })

    useEffect(() => {
        if (data) {
            setProduct(data);
        } else if (error) {
            console.error('Error:', error)
        }
    }, [data, error]);

    return (
        <>
            {
                isLoading
                    ? <Loader />
                    : <>
                        < Header />
                        <main>
                            <Breadcrumbs title='Product' previousPage='All' currentPage={id} />
                            <Cart />
                            <section className='product'>
                                <div className="container">
                                    <div className="product__content">
                                        <Aside />
                                        <ProductItem product={product} />
                                    </div>
                                </div>
                            </section>
                        </main>
                        <Footer />
                    </>
            }
        </>
    )
}
