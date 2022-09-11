import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./pages/Books";
// import Contact from "./pages/contact";
import BookDB from "./pages/BookDB";
import Bookmark from "./components/Bookmark"
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBOX from "./components/SearchBox";
// import BookCard from "./components/BookCard";
// import Comments from "./components/Comments";
import Comments2 from "./pages/Comments2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path="/" element={<Books />} />
      {/* <Route path="/Home" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/books" element={<Books />} />
      <Route path="/BookDB" element={<BookDB />} />
      <Route path="/Comments2" element={< Comments2/>} />
      <Route path="Bookmark" element={< Bookmark/>} />

      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    <Footer />
    <ToastContainer />
    </BrowserRouter>


  );
}

export default App;
