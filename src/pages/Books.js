
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import Comments from "../components/Comments";
import {MdAddCircleOutline, MdRemoveCircleOutline,MdDelete} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify';
import Comments2 from "./Comments2";
// import Bookmark from "../components/Bookmark";
import SearchBOX from "../components/SearchBox";
import BookCard from "../components/BookCard";
import { data } from "autoprefixer";


function Books (){
  const [books , setBooks] = useState([])

  const Navigate = useNavigate();
  useEffect(()=>{
  axios
    .get("http://localhost:7000/book")
    .then((res)=> setBooks(res.data.books)) 
  },[])
    
    async function editBook(){
      try{
         Navigate("/bookDB")
        await axios.put(`http://localhost:7000/book`)
      // toast.success(" edited the book")
      }
      catch(e){
        console.log(e.response)
      }
    }
    
    async function deleteBook(id){
      try{
        await axios.delete(`http://localhost:7000/book/${id}`)
      //  .then((res)=> setBooks(res.data.books)) 
      toast.success("successfully deleted the book")
      
      }
      catch(e){
        toast.error("error")
      }
    }

    async function addBookMark(id){
      try{
        const token = localStorage.getItem("token")
        await axios.post(`http://localhost:7000/bookmarks`,{Book:id},{headers:{authorization:token}})
        .then((res)=> console.log(res.data)) 
        toast.success("added to your books")
        Navigate("/Bookmark")
       
      }
      catch(e){
        toast.error("error")
      }
    }
    async function deleteBookMark(id){
      try{
        const token = localStorage.getItem("token")
        await axios.delete(`http://localhost:7000/bookmarks/${id}`,{Book:id} ,{headers:{authorization:token}})
       toast.success("deleted from your books")
       
      }
      catch(e){
        console.log(e.responce)
      }
    }
   
  // search
  async function SearchBTN(value){
    try{
      if (value){
        const token = localStorage.getItem("token")
        axios
        .get(`http://localhost:7000/book/search${value}` , {title:value},{headers:{authorization:token}})
        .then((res)=> console.log(res)) 
      }
      // Navigate("/BookCard")
    //   else{
    //     toast.error("error occured")
    //   }
     }
    
    catch(e){
      console.log(e)
    }
   }
  // search
 

    return(        
        <div>
          <SearchBOX search = {SearchBTN}/>
        <div>
              <Link to="/bookDB" className="font-bold text-red-300 hover:text-white rounded--2 outline outline-offset-2 rounded-md text-lg m-3 p-1" >
              add book
             </Link>
            </div>
            
           <div className="flex items-center justify-center flex-col grid grid-cols-3 w-4/5 ml-48 gap-4 ">
               {books.map((book,index)=>(
              
                <div className="text-white pt-10" key={index} book = {book} >
                  <BookCard book = {book}/>
                  
                <div className="flex flex-column space-x-36 py-2">
                <MdAddCircleOutline size={25} onClick={()=>addBookMark(book._id)} book = {book}
                  className="hover:text-red-300"
                  />
                  <MdRemoveCircleOutline size={25}  onClick={()=>deleteBookMark(book._id)}
                  className="hover:text-red-300"
                  />
                </div>
                
                  <img
                  src={`http://localhost:7000/${book.image}`}
                  alt="Book"
                  className="h-72 w-48 "
                  key = {book.id}
                  />

                    <div className="flex justify-center pr-7">
                      <FiEdit size={25} onClick={()=>editBook(book._id)}
                      className= "text-green-500  hover:text-green-300"/>
                      <MdDelete size={25} className= "text-red-700 hover:text-red-500"
                       onClick={()=>deleteBook(book._id)}
                      />

                    </div>
                  <div className="font-bold  text-zinc-300">
                      <p >title : {book.title}</p>
                      <p >Author: {book.Author}</p>
                      <p >description:{book.description}</p>
              
                </div>

              
            </div>
          
            ))}
         
            </div>
            
         {/* comment */}
          <Comments2/>
        {/* comment */}
        </div>
        




    )
}
export default Books;

