import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./Home/homepage";
import AddItemPage from "./function/addItem";
import Marketplace from "./function/buyItem";
import LoginPage from "./login/login";
import "./App.css";

type Item = {
  id: number;
  images: string[];
  price: number;
  location: string;
  description: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sell" element={<AddItemPage onAdd={handleAddItem} />} />
          <Route path="/buy" element={<Marketplace items={items} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
