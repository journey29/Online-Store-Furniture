import { AsideItem } from "./AsideItem";
import { AsideSlider } from "./AsideSlider";
import { asideItems } from "./aside.data";

export const Aside: React.FC = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__list">
                {Object.keys(asideItems).map(item =>
                    <AsideItem item={item} asideItems={asideItems} key={item} />
                )}
                <div className="sidebar__slider">
                    <h3 className='sidebar__item-title'>Best Sellers</h3>
                    <AsideSlider />
                </div>
            </div>
        </aside>
    )
}

