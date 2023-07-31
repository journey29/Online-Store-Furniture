import { Aside } from "components/Aside"
import { ProductItem } from "./ProductItem"
import { IProduct } from "types/types"

type Props = {
    product:IProduct[]
}

export const Product: React.FC<Props> = ({product}) => {
    return (
        <section className='product'>
            <div className="container">
                <div className="product__content">
                    <Aside />
                    <ProductItem product={product} />
                </div>
            </div>
        </section>
    )
}
