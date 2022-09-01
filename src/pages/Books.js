
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";
import { toast } from 'react-toastify';
function Books (){
  const [books , setBooks] = useState([])
  const Navigate = useNavigate();
  useEffect(()=>{
  axios
    .get("http://localhost:7000/book")
    .then((res)=> setBooks(res.data.books)) 
  },[])
    
    function editBook(){
      
    }
    
    async function deleteBook(id){
      try{
        await axios.delete(`http://localhost:7000/book/${id}`)
      //  .then((res)=> setBooks(res.data.books)) 
       Navigate("/books")
      
      }
      catch(e){
        console.log(e.message)
      }
    }

    async function addBookMark(id){
      try{
        await axios.post(`http://localhost:7000/bookmark`)
        .then((res)=> setBooks(res)) 
       Navigate("/bookmark")
       toast.success("added to your books")
      }
      catch(e){
       toast.error("removed from your books")
        
      }
    }
  
    return(        
        <div>
            <div>
              <Link to="/bookDB" className=" font-bold text-white hover:text-orange-300 rounded-md p-2 text-lg">
              add book
            </Link>
            </div>
            {books.map((book,index)=>(
                <div className="text-white pl-7" key={index} >
                  
                  <img
                  src={`http://localhost:7000/${book.image}`}
                  alt="Book"
                  className="h-72 w-48 "
                  key = {book.id}
                  />
                  <div className="flex space-x-14 pl-7 pb-7 ">
                    <button onClick={editBook}><FiEdit/></button>
                    <MdDelete color = "red" onClick={()=>deleteBook(book._id)}
                    />
                    <div>
                      <MdAddCircleOutline size={25} onClick={()=>addBookMark(book._id)} />
                      <p className="text-sm">0</p>
                      <MdRemoveCircleOutline size={25} />
                    </div>
              </div>
                <div className="font-bold py-7">
                    <h2 >title: {book.title}</h2>
                    <h2 >Author: {book.Author}</h2>
                <div className="py-2">
                    <p >description:{book.description}</p>
                    </div>
                </div>
            
            </div>
            ))}

        {/* comment */}
        <Comments/>
        {/* comment */}
        </div>




    )
}
export default Books;

