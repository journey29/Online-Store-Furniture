import { useState, useEffect } from 'react';
import { IProduct, ISort } from 'types/types';
import { useGetSortedProductsQuery } from 'store/api/products.api';

type Props = {
    setCollections(data: IProduct[]): void
}

const sort: ISort = {
    "LATEST": "data",
    "BESTSELLERS": "sales",
    "FEATURED": "rating"
}

export const Sort:React.FC<Props> = ({ setCollections }) => {
    const [activeSort, setActiveSort] = useState<string>("LATEST"); 
    const {data, error} = useGetSortedProductsQuery({sortBy: sort[activeSort], order:'desc'});
    
    useEffect(() => {
        if(data){
            setCollections(data)
        }else if(error){
            console.error('Error:', error)
        }
    }, [activeSort, data])

    return (
        <div className='sort'>
            <ul className='sort__list'>
                {Object.keys(sort).map((item) =>
                    <li key={item} className={activeSort === item ? 'sort__item active' : 'sort__item'} onClick={() => setActiveSort(item)}>{item}</li>
                )}
            </ul>
        </div>
    )
}
