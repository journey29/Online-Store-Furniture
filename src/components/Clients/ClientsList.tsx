import { ClientsItem } from "./ClientsItem"

export const ClientsList: React.FC = () => {
    return (
        <ul className='clients__list'>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo2_41221e80-0ba1-4aea-b4e8-40a5a8eb185d.png?v=1613170317&width=1500"/>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo4.png?v=1613170317&width=1500"/>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo5.png?v=1613170317&width=1500"/>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo6.png?v=1613170317&width=1500"/>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo8.png?v=1613170317&width=1500"/>
            <ClientsItem imageSrc="//cdn.shopify.com/s/files/1/2588/1650/files/logo1.png?v=1613170317&width=1500"/>
        </ul>
    )
}
