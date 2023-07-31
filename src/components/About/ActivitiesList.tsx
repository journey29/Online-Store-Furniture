import { ActivitiesItem } from "./ActivitiesItem"
import { faPerson, faMoneyBill, faLeaf, faEarthAmericas, faGift, faGear } from '@fortawesome/free-solid-svg-icons'

export const ActivitiesList: React.FC = () => {
    return (
        <div className="activities__content">
            <ActivitiesItem title="Experts In Ecommerce" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faPerson} />
            <ActivitiesItem title="End To End Solutions" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faMoneyBill} />
            <ActivitiesItem title="SEO Support For Clients" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faLeaf} />
            <ActivitiesItem title="Online Marketing Support" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faEarthAmericas} />
            <ActivitiesItem title="Easy to Customize" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faGear} />
            <ActivitiesItem title="24/7 Support For Themes" text="Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc" icon={faGift} />
        </div>
    )
}