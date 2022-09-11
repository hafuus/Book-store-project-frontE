
import { useState,useEffect} from "react";
import axios from "axios"
import { IoSendSharp } from "react-icons/io5";
function Comments(comment){
    const [comments ,setComments] = useState([])
    const [inputs ,setInputs] = useState([])
    
    useEffect(()=>{
      axios
        .get("http://localhost:7000/comment")
        .then((res)=> setComments(res.data.comments))
},[])
        async function submitBTN (e){
             e.preventDefault();
            try{
                const token = localStorage.getItem("token")
                const res = await axios.post("http://localhost:7000/comment" ,{comments:inputs}  , {
                headers: {
                  authorization:token,
                  
                },
                
                })
                  console.log(res.config.data )
            }catch(e){
               console.log(e)
            }
            
        }
    return(
        <div>
            <form action="/comment" method="post">
            <div className="p-7  bg-neutral-900 mb-10 ">
            <h3 className="text-red-300 font-bold text-lg mb-4 ">comments:{comment.comments}</h3>
            
            
            <div className="">
              <div className="flex items-center ">
                <textarea
                placeholder="leave here a comment..."
                type="text"
                className="bg-gray-200 py-3 px-7 pl-2 mb-2 rounded-sm text-sm outline-none"
                onChange={(e)=> setInputs(e.target.value)}
                />
                />
                <button className="bg-white p-1 outline-none ml-2 hover:text-red-300 mt-4" onClick={submitBTN}>
                  <IoSendSharp className="mx-2 " />
                  </button>
              </div>
              </div>
                <div className="">
                  {comments.map((comment)=>(
                    
                    <h3 className="text-white outline outline-hidden outline-zinc-900 p-3 w-3/6">{comment.comments}</h3>
                  ))}
                  </div>
            </div>
           </form>
        </div>
    )
}
export default Comments;