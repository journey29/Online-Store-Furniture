import { Product } from "./pages/Product";
import { MainPage } from "./pages/MainPage";
import { About } from "./pages/About";
import { News } from "./pages/NewsPage";
import { Shop } from "./pages/Shop";
import { Routes, Route } from 'react-router-dom'
import { NewsPost } from "./pages/NewsPost";
import { Faqs } from "./pages/Faqs";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { WishlistPage } from "./pages/WishlistPage";
import { useAuth } from "./hooks/useAuth";
import { Account } from "./pages/Account";
import { NotFound } from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage"
import { ShoppingCart } from "./pages/ShoppingCart";

export const App = () => {
  const { isAuth } = useAuth();

  if (isAuth === undefined) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/post/:id" element={<NewsPost />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact" element={<Contact />} />
      {isAuth ? (
        <>
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Navigate to="/login" />} />
        </>
      )}
      <Route path="/registration" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App


