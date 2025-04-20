const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// POST: Add new item with images
router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    const { name, price, location, description } = req.body;
    
    // Process uploaded files
    const images = req.files.map(file => ({
      path: `/uploads/${file.filename}`,
      filename: file.filename
    }));

    const newItem = new Item({
      name,
      price,
      location,
      description,
      images
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ error: "Failed to save item" });
  }
});

// GET: Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

module.exports = router;
