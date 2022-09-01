import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import About from "./pages/About";
import Books from "./pages/Books";
// import Contact from "./pages/contact";
import BookDB from "./pages/BookDB";
import Bookmark from "./pages/Bookmark"
import Header from "./components/Header";
// import BookCard from "./components/BookCard";
// import Comments from "./components/Comments";



function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/About" element={<About />} /> */}
      <Route path="/books" element={<Books />} />
      <Route path="/BookDB" element={<BookDB />} />
      <Route path="/bookmark" element={<Bookmark />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
