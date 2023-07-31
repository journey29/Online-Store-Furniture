import { useState, useEffect } from 'react'
import { IProduct } from 'types/types'
import { useGetLimitProductsQuery } from 'store/api/products.api'
import {Cart, Header, Footer, Loader,  Breadcrumbs, Shop} from './index'

export const ShopPage: React.FC = () => {
    const [shopProduct, setShopProduct] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, error } = useGetLimitProductsQuery({ limit: '6', page: currentPage.toString() })

    useEffect(() => {
        if (data) {
            setShopProduct(data);
        } else if (error) {
            console.error("Error:", error)
        }
    }, [data]);

    return (
        <>
            {isLoading
                ? <Loader />
                : <>
                    <Header />
                    <main>
                        <Cart />
                        <Breadcrumbs previousPage="Home" currentPage="Products" title="Products" />
                        <Shop setCurrentPage={setCurrentPage} setShopProduct={setShopProduct} shopProduct={shopProduct} currentPage={currentPage}/>
                    </main>
                    <Footer />
                </>
            }
        </>
    )
}
