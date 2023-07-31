import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClose, faSliders } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'types/types';
import { useGetProductsQuery } from 'store/api/products.api';
import { Aside } from 'components/Aside';
import { ShopMainItem } from './ShopMainItem';
import { Sort } from 'components/UI/Sort';
import { options } from './shop.data';

type Props = {
  setShopProduct: (state: IProduct[]) => void,
  shopProduct: IProduct[],
  currentPage: number,
  setCurrentPage: (state: number) => void,
}


export const ShopMain: React.FC<Props> = ({ setCurrentPage, setShopProduct, shopProduct, currentPage }) => {
  const [productView, setProductView] = useState<string>('grid');
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('featured');
  const [topBtnIsActive, setTopBtnIsActive] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<IProduct[]>([]);
  const [filterDrawerActive, setFilterDrawerActive] = useState<boolean>(false);
  const { data, error } = useGetProductsQuery({});

  useEffect(() => {
    if (data) {
      setTotalProducts(data);
    } else if (error) {
      console.error('Error:', error)
    }
  }, [data]);


  useEffect(() => {
    if (totalProducts.length > 0) {
      reckonTotalPages();
    }
  }, [totalProducts]);

  useEffect(() => {
    if (shopProduct.length > 0) {
      const sortedProducts = sortProducts(shopProduct, selectedSortOption);
      setShopProduct(sortedProducts);
    }
  }, [selectedSortOption]);

  
  const sortProducts = (products: IProduct[], sortOption: string): IProduct[] => {
    let sortedProducts: IProduct[] = [];
    switch (sortOption) {
      case 'featured':
        sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
        break;
      case 'sales':
        sortedProducts = [...products].sort((a, b) => b.sales - a.sales);
        break;
      case 'price asc':
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'price desc':
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case 'date asc':
        sortedProducts = [...products].sort((a, b) => a.date - b.date);
        break;
      case 'date desc':
        sortedProducts = [...products].sort((a, b) => b.date - a.date);
        break;
      default:
        throw new Error('Invalid sort option');
    }
    return sortedProducts;
  };

  const reckonTotalPages = (): void => {
    setTotalPages(Math.ceil(totalProducts.length / 6))
  }

  const paginationBack = (page: number): void => {
    if (currentPage > 1) {
      setCurrentPage(page)
    }
  }

  const paginationForward = (page: number): void => {
    if (currentPage < totalPages) {
      setCurrentPage(page)
    }
  }

  const topBtnHandler = (view: string, active: number): void => {
    setProductView(view)
    setTopBtnIsActive(active)
  }

  return (
    <>
      <div className='shop__main'>
        <div className='shop__main-top'>
          <div className='shop__top-buttons'>
            <button className={topBtnIsActive === 0 ? 'shop__top-btn active' : 'shop__top-btn'} onClick={() => topBtnHandler('grid', 0)}>
              <FontAwesomeIcon icon={faBorderAll} className='shop__btn-img' />
            </button>
            <button className={topBtnIsActive === 1 ? 'shop__top-btn active' : 'shop__top-btn'} onClick={() => topBtnHandler('list', 1)}>
              <FontAwesomeIcon icon={faList} className='shop__btn-img' />
            </button>
          </div>
          <div className='shop__top-sort'>
            <p className='shop__top-text'>Sort By</p>
            <Sort options={options} selectedOption={selectedSortOption} setSelectedOption={setSelectedSortOption}/>
          </div>
        </div>
        <div className='shop-drawer'>
          <div className='shop-drawer__button' onClick={() => setFilterDrawerActive(!filterDrawerActive)}>
            <FontAwesomeIcon icon={faSliders} />
            <p className='shop-drawer__button-text'>Filter</p>
          </div>
          <div className={filterDrawerActive ? 'shop-drawer__content active' : 'shop-drawer__content'}>
            <button className='shop-drawer__close' onClick={() => setFilterDrawerActive(false)}>
              <FontAwesomeIcon style={{ height: "24px" }} icon={faClose} />
            </button>
            <Aside />
          </div>
        </div>
        <div className={productView === 'grid' ? 'shop__main-items' : 'shop__main-list'}>
          {shopProduct.map(item => (
            <ShopMainItem productView={productView} item={item} key={item.title} />
          ))}
        </div>
        <div className='pagination'>
          <button onClick={() => paginationBack(currentPage - 1)} className={currentPage === 1 ? 'pagination__btn last' : 'pagination__btn'}>
            <FontAwesomeIcon icon={faChevronLeft} className='shop__pagination-left' />
          </button>
          {new Array(totalPages).fill(null).map((_, i) => (
            <button className={currentPage === i + 1 ? 'pagination__btn active' : 'pagination__btn'} onClick={() => setCurrentPage(i + 1)} key={i}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => paginationForward(currentPage + 1)} className={currentPage === totalPages ? 'pagination__btn last' : 'pagination__btn'}>
            <FontAwesomeIcon icon={faChevronRight} className='pagination__right' />
          </button>
        </div>
      </div>
    </>
  );
};
