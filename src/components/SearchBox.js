import{FiSearch} from "react-icons/fi"
import { toast } from 'react-toastify';
import {useState}from "react";
// import Books from "../pages/Books";

function SearchBOX({search}){
    // const [bookSearch , setBookSearch] = useState([])
    const [inputs , setInputs] = useState([])
 
    return(
        <div>
            {/* search */}
            <div className="flex flex-col justify-center items-center text-center  ">
            <div className=" w-3/4  py-4 border-black rounded-md drop-shadow-md bg-zinc-800">
            <h2 className="text-white text-4xl font-bold mb-4 pb-7 ">find here your favorite book!</h2>
            <div className="flex items-center  w-96  py-3 pl-60 mb-4 mt-1 gap-4">
            <select className="border-r-2 text-sm p-2 bg-zinc-900 text-white outline-none  ">
                <option>book</option>
                <option>author</option>
                </select>
            <div className="flex  ">
                <FiSearch className="text-white mt-2 "/>
                <input 
                placeholder="search here.."
                className="text-sm outline-none p-1 rounded-sm py-2 px-14 pl-2"
                type="text"
                onChange={(e)=> setInputs(e.target.value)}
                >
                </input>
                <button className=" bg-gray-700 ml-4 text-white text-lg font-bold p-2 rounded-md drop-shadow-md"
                onClick= {() => search (inputs)}>Search
                </button>
            </div>
            
            </div>
        </div>
        <div>
                {/* {bookSearch.map((oneBook)=>(
                    <img src= {oneBook.Books.image}
                    alt="book" 
                    />
                    
                 ))} */}
            </div>
        </div>
            {/* search */}
            
    </div>
    )


}

export default SearchBOX;