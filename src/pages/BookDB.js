import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

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
        }
        
        catch(e){ 
            console.log(e.message)
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
            <div>
            <input type="text"
                placeholder="title"
                onChange={(e)=> setInputs({...inputs , title:e.target.value})}
                
            />
            <input type="text"
                placeholder="Author"
                onChange={(e)=> setInputs({...inputs , Author:e.target.value})}
            />
            <input type="text"
                placeholder="description"
                onChange={(e)=> setInputs({...inputs , description:e.target.value})}
            />
            </div>
            <div>
                <button onClick={(e)=>bookDBBTN (e)}>add</button>
            </div>
            </div>
            </form>
        </div>
    )
}
export default BookDB;
