import { ProductPage } from "pages/ProductPage";
import { MainPage } from "pages/MainPage";
import { About } from "pages/About";
import { News } from "pages/NewsPage";
import { ShopPage } from "pages/ShopPage";
import { Routes, Route } from 'react-router-dom'
import { NewsPost } from "pages/NewsPost";
import { Faqs } from "pages/Faqs";
import { ContactPage } from "pages/ContactPage";
import { Login } from "pages/Login";
import { SignUp } from "pages/SignUp";
import { WishlistPage } from "pages/WishlistPage";
import { useAuth } from "hooks/useAuth";
import { AccountPage } from "pages/AccountPage";
import { NotFound } from "pages/NotFound";
import { Navigate } from "react-router-dom";
import { SearchPage } from "pages/SearchPage"
import { ShoppingCartPage } from "pages/ShoppingCartPage";

export const Navigation = () => {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/post/:id" element={<NewsPost />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact" element={<ContactPage />} />
      {isAuth ? (
        <>
          <Route path="/account" element={<AccountPage />} />
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
