import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import Checkout from './components/Checkout';
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  // 🔥 CATEGORIA (AGORA ESTÁVEL)
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>

      {/* HEADER */}
      <Header
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <ProductGrid
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              onAddToCart={handleAddToCart}
            />
          </>
        } />

        <Route 
          path="/checkout" 
          element={<Checkout cartItems={cartItems} />} 
        />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}