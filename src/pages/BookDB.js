import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function BookDB(){
    const [inputs , setInputs] = useState({})
    const Navigate = useNavigate();
    async function bookDBBTN(e){
        e.preventDefault();
      try{
        const formData = new FormData();
        formData.append("image" , inputs.image)
        formData.append("title" , inputs.title)
        formData.append("Author" , inputs.Author)
        formData.append("description" , inputs.description)

        const token = localStorage.getItem("token")
        const res = await axios.post("http://localhost:7000/book" , formData , {
            Headers: {authentication:token},
      })
      Navigate("/books")
      toast.success("successfully added the book")

        }
        
        catch(e){ 
      toast.error("error occured")
      
        } 

    }
    return(
        <div>
            <form encType="multipart/form-data">
            <div>
                <input type="file"
                alt="Book"
                className="h-72 w-48"
                 onChange={(e)=> setInputs({...inputs , image:e.target.files[0]})}
            />
            <div className="space-x-3">
            <input type="text"
                placeholder="title"
                onChange={(e)=> setInputs({...inputs , title:e.target.value})}
                className="inputs"
            />
            <input type="text"
                placeholder="Author"
                onChange={(e)=> setInputs({...inputs , Author:e.target.value})}
                className="inputs"
            />
            <input type="text"
                placeholder="description"
                onChange={(e)=> setInputs({...inputs , description:e.target.value})}
                className="inputs" 
            />
            </div>
            <div className="space-x-7 text-gray-200 font-bold mt-7 px-3 text-gray-300 ">
                <button onClick={(e)=>bookDBBTN (e)}
                className="hover:text-red-300 rounded--2 outline outline-offset-2 rounded-md text-sm  px-2 ">
                Add</button>
                <button onClick={(e)=>bookDBBTN (e)}
                className ="hover:text-red-300 rounded--2 outline outline-offset-2 rounded-md text-sm  px-2 ">
                Edit</button>

            </div>
            </div>
            </form>
        </div>
    )
}
export default BookDB;
