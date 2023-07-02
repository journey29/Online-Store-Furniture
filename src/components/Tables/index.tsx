import TablesItem from "./TablesItem"

export const Tables:React.FC = () => {
    return (
        <section className="tables">
            <div className="container">
                <ul className="tables__items">
                <TablesItem title="Side Tables" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." caption="Relax with yourself!" img="//cdn.shopify.com/s/files/1/2588/1650/files/img3.jpg?v=1613170316"/>
                   <TablesItem title="Coffee Tables" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." caption="Unwind with Tea" img="//cdn.shopify.com/s/files/1/2588/1650/files/img3.jpg?v=1613170316"/>
                   <TablesItem title="Dining Table" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." caption="Pool Side Corner" img="//cdn.shopify.com/s/files/1/2588/1650/files/img3.jpg?v=1613170316"/>
                </ul>
            </div>
        </section>
    )
}

