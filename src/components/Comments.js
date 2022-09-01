
import { useState, useEffect } from "react";
import axios from "axios"
import { IoSendSharp } from "react-icons/io5";
function Comments(){
    const [comments , setComments] = useState([])
    
    useEffect(()=>{
      axios
        .get("http://localhost:7000/comment")
        .then((res)=> setComments(res.data.comments))
      },[])
        async function submitBTN (e){
             e.preventDefault();
            try{
                const token = localStorage.getItem("token")
                const res = await axios.post("http://localhost:7000/comments" ,{comments}  , {
                headers: {
                  authorization:token,
                  
                },
                
                })
                  console.log(res.config.data )
            }catch(e){
               console.log(e.responce)
            }
            
        }
    return(
        <div>
            <form action="/comment" method="post">
            <div className="p-7  bg-black mb-10 ">
            <h3 className="text-orange-300 font-bold text-lg mb-4 ">enter here your comment!</h3>
            <div>
            </div>
            <div className="">
              <textarea
              placeholder="leave a comment here..."
              type="text"
              className="bg-gray-100 py-3 px-7 pl-2 mb-2 rounded-sm text-sm outline-none"
              onChange={(e)=> setComments(e.target.value)}
            />
              />
              <button className="bg-white p-1 outline-none ml-2 " onClick={submitBTN}><IoSendSharp /></button>
            </div>
        </div>
        </form>
        </div>
    )
}
export default Comments;