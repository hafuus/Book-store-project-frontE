import axios from "axios";
// import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";
// import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
// import BookDB from "../pages/BookDB";
import BookCard from "./BookCard";
// import { Link , useNavigate} from "react-router-dom";


function Bookmark(){
const [bookmark,setBokkMark] = useState([])
  // const Navigate = useNavigate();
  useEffect(()=>{
  axios
    .get(`http://localhost:7000/bookmarks/`)
    .then((res)=> {setBokkMark(res.data )
    console.log(res.data)}) 
  },[])

 

     return(
        <div className="flex items-center justify-center flex-row space-x-32 p-7 b-2 ">
          {bookmark.bookmarks?.map((oneBookMark, index) =>(
            // <h3 className="text-white font-bold">found{bookmark.save}</h3>
             <div key={index} >
              {/* <BookCard oneBookMark= {oneBookMark}/> */}
             <div className="flex items-center justify-center flex-col ">
                <div className= "">
                 <img
                  src={`http://localhost:7000/${oneBookMark.Book.image}`}
                  alt="Book"
                  className="h-72 w-48"
                  key={oneBookMark.id}
                  /> 
                </div>
             <div className="font-bold  text-zinc-300">
                      <p className="text-xl font-black"> {oneBookMark.Book.title}</p>
                      {/* <p >Author: {oneBookMark.Author}</p>
                      <p >description:{oneBookMark.description}</p> */}
                 </div> 
             
            </div>
            </div>
           ))}
        </div>
    )
    
}

export default Bookmark;