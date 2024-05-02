import Footer from "./components/Footer.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ListItem from "./components/ListItem.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListItem />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <Sidebar />
    </>
  );
}

export default App;
