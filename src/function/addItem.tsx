import React, { useState, useRef, useEffect } from "react";
import { saveItem } from "../serverices/api";
import "./AddItemPage.css";

const AddItemPage: React.FC = () => {
  const [item, setItem] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setImages(files);
      
      // Create image previews
      const previews = files.map(file => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", item.name);
      formData.append("price", item.price);
      formData.append("location", item.location);
      formData.append("description", item.description);
      images.forEach(image => formData.append("images", image));

      await saveItem(formData);
      alert("Item added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    }
  };

  const resetForm = () => {
    setItem({ name: "", price: "", location: "", description: "" });
    setImages([]);
    setImagePreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="add-item-container">
      <h2 className="add-item-title">Sell Your Item</h2>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={item.name}
            onChange={handleChange}
            placeholder="Enter item name"
            required
          />
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={item.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={item.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={item.description}
            onChange={handleChange}
            placeholder="Describe your item"
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Images</label>
          <div className="file-input-wrapper">
            <button type="button" className="file-input-button">
              {images.length > 0 ? `${images.length} files selected` : "Choose Images"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              multiple
              accept="image/*"
              className="file-input"
              required
            />
          </div>
          <div className="image-preview-container">
            {imagePreviews.map((preview, index) => (
              <img key={index} src={preview} alt="Preview" className="image-preview" />
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          List Item for Sale
        </button>
      </form>
    </div>
  );
};

export default AddItemPage;
