import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Backend URL

export const saveItem = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error saving item:", error);
    throw error;
  }
};
