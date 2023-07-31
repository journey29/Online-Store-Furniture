import { Aside } from "components/Aside"
import { ShopMain } from "./ShopMain"
import { IProduct } from "types/types"

type Props = {
    setShopProduct: (state: IProduct[]) => void,
    shopProduct: IProduct[],
    currentPage: number,
    setCurrentPage: (state: number) => void,
}

export const Shop: React.FC<Props> = ({setCurrentPage, setShopProduct, shopProduct , currentPage}) => {
    return (
        <section className="shop">
            <div className="container">
                <div className="shop__content">
                    <Aside />
                    <ShopMain shopProduct={shopProduct} setShopProduct={setShopProduct} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </section>
    )
}
