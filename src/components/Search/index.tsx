import { IProduct } from "types/types"
import { SearchItem } from "./SearchItem"
import { Filtration } from "components/Filtration"

type Props = {
    products:IProduct[],
    setProducts: (products:IProduct[])=>void
}

export const Search: React.FC<Props> = ({products, setProducts}) => {
    return (
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
    )
}
