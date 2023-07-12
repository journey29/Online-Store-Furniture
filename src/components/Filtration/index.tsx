import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { IProduct } from "types/types"
import { ChangeEvent, useState, useCallback  } from 'react'
import { useNavigate } from "react-router-dom"
import { useGetProductsQuery } from "store/api/products.api"
import { debounce } from 'lodash'
import { Link } from "react-router-dom"
import { setFilterInput, setFilteredItems } from "store/slices/headerSlice"
type Props = {
    products: IProduct[],
    setProducts: (state: IProduct[]) => void
}

export const Filtration: React.FC<Props> = ({ products, setProducts }: Props) => {
    const { filteredItems, filterInput } = useAppSelector((state) => state.header);
    const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
    const { data } = useGetProductsQuery({});
    const dispatch = useAppDispatch()
    const setFilteredInput = (state: string) => dispatch(setFilterInput(state));
    const setSearchFilteredItems = (state: IProduct[]) => dispatch(setFilteredItems(state))
    const navigate = useNavigate();

    const updateSearchItems = useCallback(
        debounce((str: string) => {
            if (data) {
                const filteredItems = data.filter(item => item.title.toLowerCase().includes(str.toLowerCase()))
                setFilteredInput(str)
                setSearchFilteredItems(filteredItems)
                setProducts(filteredItems)
            }
        }, 300),
        []
    );

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFilteredInput(e.target.value);
        updateSearchItems(e.target.value);
    };

    const onSearchBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        updateSearchItems(filterInput);
        setSearchIsActive(false);
    };

    const navigateToProduct = (title: string): void => {
        navigate(`/product/${title.replaceAll(" ", "-").toLowerCase()}`);
    };

    return (
        <div className="filtration">
            <form className='filtration__form'>
                <h3 className='filtration__form-title'>Search results</h3>
                <div className='filtration__form-findbox'>
                    <input className='filtration__form-input' type="search" placeholder='Search' value={filterInput} onChange={onChangeInput} onClick={() => setSearchIsActive(true)} />
                    <button className='filtration__form-btn' onClick={onSearchBtn}>
                        <FontAwesomeIcon style={{ width: "18px", height: "18px" }} icon={faSearch} />
                    </button>
                </div>
                <p className='filtration__form-text'>{products.length} results found for “{filterInput}”</p>
            </form>
            <div className="filtration__products">
                {filteredItems && searchIsActive && filterInput &&
                    <div className="filtration__products-content">
                        {filteredItems.length > 0
                            ? <>
                                <h6 className="filtration__products-title">Products</h6>
                                <ul className="filtration__products-list">
                                    {filteredItems.map(item =>
                                        <li className="filtration__products-item" key={item.title}>
                                            <img className="filtration__products-img" src={item.imageUrl} alt="img" />
                                            <div className="filtration__products-descbox">
                                                <h4 className="filtration__descbox-title" onClick={() => navigateToProduct(item.title)}>{item.title}</h4>
                                                <p className="filtration__descbox-price">${item.price}.00</p>
                                            </div>
                                        </li>)}
                                </ul>
                                <Link className="filtration__products-search" to="/search" onClick={() => updateSearchItems(filterInput)}>
                                    <span className="filtration__search-text">Search for "{filterInput}"</span>
                                    <FontAwesomeIcon className="filtration__search-icon" icon={faArrowRight} />
                                </Link>
                            </>
                            : <Link className="filtration__products-search" to="/search">
                                <span className="filtration__search-text">Search for "{filterInput}"</span>
                                <FontAwesomeIcon className="filtration__search-icon" icon={faArrowRight} />
                            </Link>
                        }
                    </div>
                }
            </div>
        </div>
    )
}