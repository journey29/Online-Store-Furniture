import { useState, useEffect } from 'react'
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ShopMain } from '../components/Shop/ShopMain'
import { Loader } from '../components/Loader'
import { IProduct } from '../types/types'
import { Cart } from '../components/Cart'
import { Aside } from '../components/Aside'
import { Cookies } from '../components/Cookies'
import { useGetLimitProductsQuery} from '../store/api/products.api'

export const Shop: React.FC = () => {
    const [shopProduct, setShopProduct] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, error} = useGetLimitProductsQuery({limit:'6', page:currentPage.toString()})

    useEffect(() => {
        if (data) {
            setShopProduct(data);
        }else if(error){
            console.error("Error:",error)
        }
    }, [data]);

    return (
        <>
            {isLoading
                ? <Loader />
                : <>
                    <Header />
                    <Cart />
                    <Cookies />
                    <Breadcrumbs previousPage="Home" currentPage="Products" title="Products" />
                    <section className="shop">
                        <div className="container">
                            <div className="shop__content">
                                <Aside />
                                <ShopMain shopProduct={shopProduct} setShopProduct={setShopProduct} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            </div>
                        </div>
                    </section>
                    <Footer />
                </>
            }
        </>
    )
}
