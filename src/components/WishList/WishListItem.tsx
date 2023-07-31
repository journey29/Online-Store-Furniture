import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, } from 'hooks/redux'
import { removeWishListItem } from 'store/slices/wishlistSlice'
import { IWishItem } from 'types/types'
import { Link } from 'react-router-dom'

type Props = {
    item: IWishItem
}

export const WishListItem: React.FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch();
    const deleteWishListItem = (state: string) => dispatch(removeWishListItem(state))
    return (
        <tr className='wishlist__item' key={item.title}>
            <td className='wishlist__item-column'>
                <img className='wishlist__item-img' src={item.img} alt="img" />
            </td>
            <td className='wishlist__item-column'>
                <a className='wishlist__item-title' href="">{item.title}</a>
            </td>
            <td className='wishlist__item-column'>
                <span className='wishlist__item-price'>${item.price}.00</span>
            </td>
            <td className='wishlist__item-column'>
                <Link className='wishlist__item-options' to={`/product/${item.title.replaceAll(' ', '-').toLowerCase()}`}>Select Options</Link>
            </td>
            <td className='wishlist__item-column'>
                <button className='wishlist__item-btn'>
                    <FontAwesomeIcon style={{ height: "25px" }} className='wishlist__item-close' icon={faClose} onClick={() => deleteWishListItem(item.title)} />
                </button>
            </td>
        </tr>
    )
}
