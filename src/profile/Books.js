
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import Comments from "../components/Comments";
import {MdAddCircleOutline, MdRemoveCircleOutline,MdDelete} from "react-icons/md";
import { BsFillBookmarkPlusFill,BsFillBookmarkDashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify';
import Comments from "../components/Comments";
// import Bookmark from "../components/Bookmark";
import SearchBOX from "../components/SearchBox";
import BookCard from "../components/BookCard";


function Books (){
  const [books , setBooks] = useState([])
  const [search,setSearch] = useState("")
  const Navigate = useNavigate();
  useEffect(()=>{
    console.log("hi")
  axios
    .get(`http://localhost:7000/book?search=${search}`)
    .then((res)=> setBooks(res.data.books)) 
  },[search])
    
    async function deleteBook(id ){
      try{
        const token = localStorage.getItem("token")
        await axios.delete(`http://localhost:7000/book/${id}` ,{
          Headers: {authorization:token},
        })
      //  .then((res)=> setBooks(res.data.books)) 
      // toast.success("successfully deleted the book")
      // Navigate("/Books")
      }
      catch(e){
        // toast.error("error")
        console.log(e.message)
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
       Navigate("/Bookmark")
      }
      catch(e){
        console.log(e.responce)
      }
    }
   
  // search
  async function SearchBTN(value){
    setSearch(value)
    // try{
    //   // if (value){
    //   //   const token = localStorage.getItem("token")
    //   //   axios
    //   //   .get(`http://localhost:7000/book/search${value}` , {title:value},{headers:{authorization:token}})
    //   //   .then((res)=> console.log(res)) 
    //   // }
    //   // Navigate("/BookCard")
    // //   else{
    // //     toast.error("error occured")
    // //   }
    //  }
    
    // catch(e){
    //   console.log(e)
    // }
   }
  // search
 

    return(        
        <div>
          <SearchBOX search = {SearchBTN}/>
        <div>
             
            </div>
            
           <div className="flex items-center justify-center flex-col grid grid-cols-3 w-4/5 ml-48 gap-4 ">
               {books.map((book,index)=>(
              
                <div className="text-white pt-10" key={index} book = {book} >
                 
                  <BookCard book = {book}/>
                  
                <div className="flex flex-column space-x-36 py-2">
                <BsFillBookmarkPlusFill size={25} onClick={()=>addBookMark(book._id)} book = {book}
                  className="hover:text-red-300"
                  />
                  <BsFillBookmarkDashFill size={25}  onClick={()=>deleteBookMark(book._id)}
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
                      <Link to ={ `/BookDB/edit/${book._id}`}>
                        < FiEdit size={25} 
                        className= "text-green-500  hover:text-green-300"/>
                      </Link>
                      <Link to ={ `/Books/delete/${book._id}`}>
                        <MdDelete size={25} className= "text-red-700 hover:text-red-500"
                          onClick={()=>deleteBook(book._id)}
                        />
                      </Link>

                    </div>
                  <div className="font-bold  text-zinc-300">
                      <p className="text-xl font-black">{book.title}</p>
                      <p className="text-sm">{book.Author}</p>
                      <p className="text-sm">{book.description}</p>
              
                </div>

              
            </div>
          
            ))}
         
            </div>
            
         {/* comment */}
         <Comments/>
        {/* comment */}
        </div>
        




    )
}
export default Books;

