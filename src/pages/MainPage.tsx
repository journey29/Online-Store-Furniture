import { Cart } from '../components/Cart';
import { Collection } from '../components/Collection';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Tables } from '../components/Tables';
import { Footer } from '../components/Footer';
import { Cookies } from '../components/Cookies';
import { Popup } from '../components/Popup';
import { MainNews } from '../components/MainNews.tsx';
import { Clients } from '../components/Clients/index.tsx';
import { Banners } from '../components/Banners/index.tsx';

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

