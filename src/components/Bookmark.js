import axios from "axios";
import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";


function Bookmark(book , id){
const [bookmark,setBokkMark] = useState([])
  const Navigate = useNavigate();
  useEffect(()=>{
  axios
    .get(`http://localhost:7000/bookmarks`)
    .then((res)=> setBokkMark(res.data.bookmark)) 
  },[])
  console.log(bookmark)


  

    //  async function addBookMark(id){
    //     try{
    //       const token = localStorage.getItem("token")
    //       await axios.post(`http://localhost:7000/bookmarks`,{Book:id},{headers:{authorization:token}})
    //       .then((res)=> console.log(res.data)) 
    //      toast.success("added to your books")
         
    //     }
    //     catch(e){
    //       toast.error("error")
    //     }
    //   }
  
    //   async function deleteBookMark(id){
    //     try{
    //       await axios.delete(`http://localhost:7000/bookmarks/${id}`)
    //      toast.success("deleted from your books")
         
    //     }
    //     catch(e){
    //       console.log(e.responce)
    //     }
    // }
     return(
        <div>
            <div className="flex space-x-36 mb-3 text-gray-300 ">
            <img
                  src={`http://localhost:7000/${book.image}`}
                  alt="Book"
                  className="h-72 w-48 "
                  key = {book.id}
                  />
                  <div className="font-bold  text-zinc-300">
                      <p >title : {book.title}</p>
                      <p >Author: {book.Author}</p>
                      <p >description:{book.description}</p>
              
                </div>

               
            </div>
        </div>
    )
    
}

export default Bookmark;