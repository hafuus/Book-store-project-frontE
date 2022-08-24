import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
function Books (){
      const [inputs , setInputs ] = useState({});
    return(        
        <div>
            <div className="text-white pl-7 ">
            <input type="file"
            alt="Book"
            className="h-72 w-48"
            onChange={(e)=> ({...inputs , image:e.target.files[0]})}
          />
            <div className="font-bold py-7">
                <h2>title: Tell No One</h2>
                <h2>Author: Harlan Coben</h2>
            <div className="py-2">
                    <p>description:Tell No One is a thriller novel <br></br> by American writer Harlan Coben,<br></br> published in 2001.</p>
                </div>
            </div>
          
            </div>


        {/* comment */}
        <div className="p-7  bg-black mb-10 ">
            <h3 className="text-orange-300 font-bold text-lg mb-4 ">enter here your comment!</h3>
            <div className="">
              <input placeholder="comment..." type="text" className="bg-gray-100 py-3 px-7 pl-2 mb-2 rounded-sm text-sm outline-none" />
              <button className="bg-white p-1 outline-none ml-2 "><IoSendSharp /></button>
              
            </div>
        </div>

        {/* comment */}
        </div>
    )
}
export default Books;