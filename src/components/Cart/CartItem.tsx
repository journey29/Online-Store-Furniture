import { useAppDispatch } from '../../hooks/redux';
import { removeCartItem, setCartItemInputValue } from '../../store/cartSlice';

type Props = {
    title: string,
    img: string,
    price: number,
    value:number
}

export const CartItem: React.FC<Props> = ({ value, title, img, price }) => {
    const dispatch = useAppDispatch();
    const deleteCartItem = (state: string) => dispatch(removeCartItem(state));
    const changeCartItemInput = (title:string, value:number) => dispatch(setCartItemInputValue({title, value}))
  
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: number = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue <= 1000 && newValue > 0) {
            changeCartItemInput(title, newValue)
        } else {
            changeCartItemInput(title, 1)
        }
    };

    const minusBtn = (): void => {
      if (value > 1) {
        changeCartItemInput(title, value-1)
      } else {
        deleteCartItem(title);
      }
    };
    const plusBtn = (): void => {
        changeCartItemInput(title, value+1)
    };
    return (
      <li className="cart__item">
        <img className="cart__item-img" src={img} alt="img" />
        <div className="cart__item-info">
          <h6 className="cart__item-title">{title}</h6>
          <p className="cart__item-properties">Brown / Teak / 106.7 x 50.8 x 73.7</p>
          <p className="cart__item-price">${price * value}.00</p>
          <div className="cart__item-quantity">
            <button className="plus" onClick={plusBtn}>+</button>
            <input className="cart__input" type="text" value={value} onChange={changeInput} />
            <button className="minus" onClick={minusBtn}>-</button>
          </div>
        </div>
      </li>
    );
  };

