import { bigFirst } from 'utils/bigFirst';
import { IAsideItems } from 'types/types';
import AsideItemList from './AsideItemList';

type Props = {
    asideItems: IAsideItems,
    item: string
}


export const AsideItem:React.FC<Props> = ({ asideItems, item }) => {
    
    return (
        <div className={`sidebar__${item}-item`}>
            <h3 className='sidebar__item-title'>{bigFirst(item)}</h3>
            {Object.keys(asideItems[item]).map(list =>
               <AsideItemList list={list} asideItems={asideItems} item={item} key={list}/>
            )}
        </div>
    )
}
