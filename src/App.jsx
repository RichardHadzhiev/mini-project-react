import "./App.css";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ListItem from "./components/ListItem.jsx";
import data from "./data/data.json";
import ItemDetails from "./components/ItemDetails.jsx";
import itemSummary from "./components/ItemDetails.jsx";

function App() {
  const [content, setContent] = useState(data);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemIds = content.map((item) => item.id);
    const maxId = Math.max(...itemIds);

    const newItem = {
      id: maxId + 1,
      title: title,
      description: description,
      price: price,
      brand: brand,
      category: category,
      thumbnail: thumbnail,
      images: images,
    };

    const newList = [newItem, ...content];
    setContent(newList);

    setTitle("");
    setImages("");
    setDescription("");
    setCategory("");
    setBrand("");
    setPrice("");
    setThumbnail("");
  };

  function deleteItem(dataId) {
    const newValue = content.filter((ele) => ele.id !== dataId);
    setContent(newValue);
  }

  return (
    <>
      <Navbar />
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              required
              placeholder="Enter the Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Enter a Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Price:
            <input
              type="number"
              name="price"
              required
              min={1}
              placeholder="Enter the Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Image
            <input
              type="url"
              name="image"
              placeholder="Place the Image"
              value={thumbnail}
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              placeholder="Enter the Brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            More Images
            <input
              type="url"
              name="images"
              placeholder="Enter the Images"
              value={images}
              onChange={(e) => {
                setImages(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Category:
            <input
              type="text"
              name="category"
              placeholder="Enter the Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <p>
            <button>Create</button>
          </p>
        </form>
      </section>

      <Routes>
        <Route
          path="/"
          element={<ListItem content={content} callbackToDelete={deleteItem} />}
        />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/items/:itemId"
          element={<ItemDetails content={content} />}
        />
      </Routes>

      <Footer />
      <Sidebar />
    </>
  );
}

export default App;
