import AsideItem from "./AsideItem";
import { AsideSlider } from "./AsideSlider";

const asideItems = {
    category: {
        elegant: {
            title: 'Elegant Styles',
            listItems: ['Table linean', 'Kitchen tools', 'Sausage', 'Pindia', 'Royaloak', 'Ebee']
        },
        luxury: {
            title: 'Luxury Collection',
            listItems: ['Table linean', 'Kitchen tools', 'Sausage', 'Pindia', 'Royaloak', 'Ebee']
        }
    }
}

export const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__list">
                {Object.keys(asideItems).map(item =>
                    <AsideItem item={item} asideItems={asideItems} key={item} />
                )}
                <div className="sidebar__slider">
                    <h3 className='sidebar__item-title'>Best Sellers</h3>
                    <AsideSlider/>
                </div>
            </div>
        </aside>
    )
}

