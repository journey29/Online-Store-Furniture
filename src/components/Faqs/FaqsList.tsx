import { FaqsItem } from "./FaqsItem"

export const FaqsList: React.FC = () => {
    return (
        <div className="questions__list">
            <FaqsItem title='What is your return policy?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
            <FaqsItem title='How can i get support?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
            <FaqsItem title='How to redeem my gift card?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
            <FaqsItem title='How do i pay for my purchase?' text='Condimentum mattis pellentesque id nibh tortor id. Fermentum posuere urna nec tincidunt praesent semper.' />
        </div>
    )
}
