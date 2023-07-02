import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Footer } from '../components/Footer'
import { ProductItem } from '../components/Product/ProductItem'
import { Cart } from '../components/Cart'
import { Aside } from '../components/Aside'
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader'
import { IProduct } from '../types/types'
import { Cookies } from '../components/Cookies'
import { useGetProductsQuery } from '../store/api/products.api'

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
                        <Breadcrumbs title='Product' previousPage='All' currentPage={id} />
                        <Cart />
                        <Cookies />
                        <section className='product'>
                            <div className="container">
                                <div className="product__content">
                                    <Aside />
                                    <ProductItem product={product} />
                                </div>
                            </div>
                        </section>
                        <Footer />
                    </>
            }
        </>
    )
}
