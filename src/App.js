import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Books from "./pages/Books";
import Contact from "./pages/contact";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/About" element={<About />} /> */}
      {/* <Route path="/books" element={<Books />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
