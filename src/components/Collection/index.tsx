import { useState, useEffect } from 'react';
import { Sort } from '../Sort';
import { IProduct} from '../../types/types';
import { CollectionItem } from './CollectionItem';
import { useGetLimitProductsQuery} from '../../store/api/products.api';

export const Collection: React.FC = () => {
  const {data, error} = useGetLimitProductsQuery({limit:'6', page:'1'})
  const [collections, setCollections] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      setCollections(data);
    } else if (error) {
      console.error('Error:', error);
    }
  }, [data]);

  return (
    <section className="collection">
      <div className="container">
        <div className="collection__top">
          <h2 className="collection__title">Trendy Collections</h2>
          <Sort setCollections={setCollections} />
        </div>
        <div className="collection__items">
          {collections.map((item) => (
           <CollectionItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
    
    </section>
  );
};