import React, { useState } from "react";
import "./Marketplace.css";

interface Item {
  id: number;
  images: string[];
  price: number;
  location: string;
  description: string;
}

interface MarketplaceProps {
  items: Item[];
}

const Marketplace: React.FC<MarketplaceProps> = ({ items }) => {
  const handleMessage = (id: number) => {
    alert(`Automated message sent for item ID ${id}`);
  };

  return (
    <div className="marketplace-container">
      <h2 className="marketplace-title">Explore</h2>
      <div className="item-grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onMessage={handleMessage} />
        ))}
      </div>
    </div>
  );
};

const ItemCard: React.FC<{ item: Item; onMessage: (id: number) => void }> = ({
  item,
  onMessage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + item.images.length) % item.images.length
    );
  };

  return (
    <div className="item-card">
      {/* Image Slider */}
      <div className="image-slider">
        <img
          src={item.images[currentIndex]}
          alt="Item"
          className="slider-image"
        />
        {/* Navigation Buttons */}
        {item.images.length > 1 && (
          <>
            <button onClick={prevImage} className="nav-button left">
              ❮
            </button>
            <button onClick={nextImage} className="nav-button right">
              ❯
            </button>
          </>
        )}
      </div>

      {/* Item Details */}
      <div className="item-details">
        <p className="item-price">${item.price}</p>
        <p className="item-location">{item.location}</p>
        <p className="item-description">{item.description}</p>
        <button onClick={() => onMessage(item.id)} className="message-button">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Marketplace;
