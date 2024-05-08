import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ListItem from "./components/ListItem.jsx";
import data from "./data/data.json";
import ItemDetails from "./components/ItemDetails.jsx";

function App() {
  const [content, setContent] = useState(data);

  function deleteItem(dataId) {
    const newValue = content.filter((ele) => ele.id !== dataId);
    setContent(newValue);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ListItem
              content={content}
              callbackToDelete={deleteItem}
              setContent={setContent}
            />
          }
        />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/items/:itemId"
          element={<ItemDetails content={content} />}
        />
      </Routes>

      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
