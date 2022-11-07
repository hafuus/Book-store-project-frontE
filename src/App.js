import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./profile/Books";
// import Contact from "./pages/contact";
import BookDB from "./profile/BookDB";
import Bookmark from "./components/Bookmark"
import Header from "./components/Header";
import Footer from "./components/Footer";
// import SearchBOX from "./components/SearchBox";
// import BookCard from "./components/BookCard";
import Comments from "./components/Comments";
// import Comments2 from "./pages/Comments2";
import Protect from './Protect';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { UserContex } from './utils/UserContex';
import { useState , useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [user , setUser] = useState(false);
const [loading , setLoading] = useState(true)
useEffect (() => {
// if user logged in
const token = localStorage.getItem("token");
if (token){
  setUser(true)
}

setLoading(false)
} , []);
// // loading
if (loading) {
  return <h3 className='text-white'>loading.....</h3>
}



  return (
    <UserContex.Provider value={{user , setUser}}>
     <BrowserRouter>
        <Header />
          <Routes>
            
            <Route path="/" element={<Books />} />
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/BookDB" element={<BookDB />} />
            <Route path="/Comments" element={< Comments/>} />
            <Route path="/Books" element={< Books/>} /> 
            {/* <Route path="/contact" element={<Contact />} /> */}

            <Route  element={<Protect />}>
              <Route path="Bookmark" element={< Bookmark/>} />
              <Route path="/Books/delete/:id" element={< Books/>} /> 
              <Route path="/BookDB/edit/:id" element={< BookDB/>} /> 
              <Route path="/Comments/submit" element={< Comments/>} />
              {/* <Route path="Bookmark" element={< Bookmark/>} /> */}
              {/* <Route path="Books/add" element={< Bookmark/>} /> */}
              {/* <Route path="Books/remove" element={< Bookmark/>} /> */}
           </Route>  
         </Routes>
         <Footer />
       <ToastContainer />
      </BrowserRouter>
    </UserContex.Provider>

  );
}

export default App;
