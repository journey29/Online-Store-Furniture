import { ICart } from "types/types"
import { useAppDispatch} from 'hooks/redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBucket } from "@fortawesome/free-solid-svg-icons";
import { setCartItemInputValue, removeCartItem } from "store/slices/cartSlice";
import React from "react";

type Props = {
  item: ICart
}

export const ShoppingCartItem:React.FC<Props>= ({ item }) => {
  const dispatch = useAppDispatch();
  const deleteCartItem = (state: string) => dispatch(removeCartItem(state));
  const changeCartItemInput = (title:string, value:number) => dispatch(setCartItemInputValue({title, value}))

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue: number = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue <= 1000 && newValue > 0) {
        changeCartItemInput(item.title, newValue)
    } else {
        changeCartItemInput(item.title, 1)
    }
};
  const minusBtn = (): void => {
    if (item.inputValue > 1) {
      changeCartItemInput(item.title, item.inputValue-1)
    } else {
      deleteCartItem(item.title);
    }
  };
  const plusBtn = (): void => {
      changeCartItemInput(item.title, item.inputValue+1)
  };

  return (
    <tr className='shopping-cart__item' key={item.title}>
      <td className='shopping-cart__item-column shopping-cart__item-details'>
        <img className='shopping-cart__item-img' src={item.img} alt="img" />
        <div className='shopping-cart__item-info'>
          <a className='shopping-cart__item-title' href="">{item.title}</a>
          <span className='shopping-cart__item-price'>${item.price}.00</span>
        </div>
      </td>
      <td className='shopping-cart__item-column'>
        <div className='shopping-cart__item-modifier'>
          <button className='shopping-cart__modifier-btn' onClick={minusBtn}>-</button>
          <input className='shopping-cart__modifier-input' type="text" value={item.inputValue} onChange={handleQuantityInput} />
          <button className='shopping-cart__modifier-btn' onClick={plusBtn}>+</button>
        </div>
        <button className="shopping-cart__item-btn">
          <FontAwesomeIcon style={{ height: "18px" }} className="shopping-cart__item-bucket" icon={faBucket} onClick={() => deleteCartItem(item.title)} />
        </button>
      </td>
      <td className='shopping-cart__item-column'>
        <p className='shopping-cart__item-price' onClick={() => deleteCartItem(item.title)}>${item.price * item.inputValue}.00</p>
      </td>
    </tr>
  )
}
