import React, { useState } from "react";
import "./AddItemPage.css";

interface Item {
  id: number;
  images: string[];
  price: number;
  location: string;
  description: string;
}

interface AddItemProps {
  onAdd: (item: Item) => void;
}

const AddItemPage: React.FC<AddItemProps> = ({ onAdd }) => {
  const [item, setItem] = useState<{
    images: string[];
    price: string;
    location: string;
    description: string;
  }>({
    images: [],
    price: "",
    location: "",
    description: "",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setItem((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedImages], // Store image URLs
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    onAdd({
      id: Date.now(),
      images: item.images,
      price: parseFloat(item.price),
      location: item.location,
      description: item.description,
    });
    setItem({ images: [], price: "", location: "", description: "" });
    setCurrentImageIndex(0);
  };

  return (
    <div className="add-item-container">
      <h2 className="title">Add an Item</h2>

      {/* Image Preview Slider */}
      <div className="image-preview">
        {item.images.length > 0 ? (
          <>
            <img
              src={item.images[currentImageIndex]}
              alt="Preview"
              className="preview-image"
            />
            {item.images.length > 1 && (
              <>
                <button
                  className="nav-button left"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? item.images.length - 1 : prev - 1
                    )
                  }
                >
                  ◀
                </button>
                <button
                  className="nav-button right"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === item.images.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  ▶
                </button>
              </>
            )}
          </>
        ) : (
          <div className="no-image">No Image Selected</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="add-item-form">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="input-field"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
          className="input-field"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={item.location}
          onChange={handleChange}
          className="input-field"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
          className="input-field textarea"
          required
        />

        <button type="submit" className="submit-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
