import React, { useState, useEffect } from "react";
import "./Marketplace.css";
import axios from "axios";

interface Item {
  _id: string;
  name: string;
  images: string[];
  price: number;
  location: string;
  description: string;
}

const Marketplace: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setItems(response.data);
        setFilteredItems(response.data); // Initialize filtered items
      } catch (err) {
        setError("Failed to fetch items");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    // Filter items based on search query and combined filter option
    const filtered = items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterOption === "" ||
        filterOption === "low-to-high" ||
        filterOption === "high-to-low" ||
        item.location === filterOption;
      return matchesSearch && matchesFilter;
    });

    // Sort items if price filter is selected
    if (filterOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filterOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(filtered);
  }, [searchQuery, filterOption, items]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  const handleMessage = (_id: string) => {
    alert(`Automated message sent for item ID ${_id}`);
  };

  return (
    <div className="marketplace-container">
      <h2 className="marketplace-title">Explore</h2>

      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
          {searchQuery && (
            <button className="clear-search" onClick={handleClearSearch}>
              ✖
            </button>
          )}
        </div>
        <select value={filterOption} onChange={handleFilterChange} className="filter-dropdown">
          <option value="">All Filters</option>
          <optgroup label="Sort by Price">
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </optgroup>
          <optgroup label="Filter by Location">
            {Array.from(new Set(items.map((item) => item.location))).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="item-grid">
        {filteredItems.map((item) => (
          <ItemCard key={item._id} item={item} onMessage={handleMessage} />
        ))}
      </div>
    </div>
  );
};

const ItemCard: React.FC<{ item: Item; onMessage: (_id: string) => void }> = ({
  item,
  onMessage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false); // State to track wishlist status
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + item.images.length) % item.images.length
    );
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted); // Toggle wishlist status
    if (!isWishlisted) {
      alert(`Added "${item.name}" to your wishlist!`);
    } else {
      alert(`Removed "${item.name}" from your wishlist.`);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="item-card">
      {/* Image Slider */}
      <div className="image-slider" onClick={openModal}>
        <img
          src={`http://localhost:5000${item.images[currentIndex]}`}
          alt="Item"
          className="slider-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
            (e.target as HTMLImageElement).alt = "Image not available";
          }}
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

      {/* Modal for Wider View */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`http://localhost:5000${item.images[currentIndex]}`}
              alt="Item"
              className="modal-image"
            />
            <button className="close-modal" onClick={closeModal}>
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Item Details */}
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3> {/* Display product name */}
        <p className="item-price">${item.price}</p>
        <p className="item-location">{item.location}</p>
        <p className="item-description">{item.description}</p>
        <button onClick={() => onMessage(item._id)} className="message-button">
          Send Message
        </button>
        <div className="action-buttons">
          <button
            onClick={handleWishlist}
            className="wishlist-button"
            style={{
              backgroundColor: isWishlisted ? "#ff4081" : "#e0e0e0", // Pink if wishlisted, gray otherwise
              color: isWishlisted ? "white" : "black",
              padding: "8px 12px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;