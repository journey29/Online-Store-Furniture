import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { IProduct } from 'types/types'
import { useGetProductsQuery } from 'store/api/products.api'
import {Cart, Header, Footer, Loader, Breadcrumbs, Product} from './index'

export const ProductPage: React.FC = () => {
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
                            <Product product={product}/>
                        </main>
                        <Footer />
                    </>
            }
        </>
    )
}
