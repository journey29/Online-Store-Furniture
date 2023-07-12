import {Cart, Header, Footer, Collection, Clients, MainNews, Main, Tables, Banners, Cookies, Popup} from './index'

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
        <Cart />
        <Cookies />
        <Popup />
        <Main />
        <Tables />
        <Collection />
        <Banners />
        <MainNews />
        <Clients />
      <Footer />
    </>
  )
}

