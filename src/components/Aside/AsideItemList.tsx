import { MouseEvent, useState } from 'react';
import { IAsideItems } from 'types/types';
import { Link } from 'react-router-dom';
type Props = {
    list: string,
    asideItems: IAsideItems,
    item: string
}

const AsideItemList:React.FC<Props> = ({ list, asideItems, item }) => {
    const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
    const labelHandler = (e: MouseEvent<HTMLLabelElement>): void => {
        e.preventDefault()
        setIsContentVisible(!isContentVisible)
    }
    return (
        <div className='sidebar__item-list'>
            <input className='sidebar__item-input' type="checkbox" id={list} />
            <label className='sidebar__item-trigger' htmlFor={list} onClick={(e) => labelHandler(e)}>
                {asideItems[item][list]['title']}
            </label>
            <ul className={isContentVisible ? 'sidebar__item-sublist active' : 'sidebar__item-sublist'}>
                {asideItems[item][list].listItems.map(listItems =>
                    <li className='sidebar__sublist-item' key={listItems}>
                        <Link className='sidebar__sublist-link' to="/shop">{listItems}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AsideItemList