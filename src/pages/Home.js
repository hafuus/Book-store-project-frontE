import {Link}from "react-router-dom"
import{FiSearch} from "react-icons/fi"
import Signup from "../components/BookCard"
function Home (){
  
    return(
      <div className="flex flex-col justify-center items-center text-center ">
        <div className=" w-3/4  py-4 border-black  bg-black ">
          <h2 className="text-white text-4xl font-bold mb-4 pb-7">find here your favorite book</h2>
          <div className="flex items-center  w-96  py-3 pl-60 mb-4 mt-1 gap-4">
           <select className="border-r-2 text-sm p-2 bg-black text-white ">
                <option>book</option>
                <option>author</option>
              </select>
            <div className="flex  ">
              <FiSearch className="text-white mt-2 "/>
              <input 
              placeholder="search here.."
              className="text-sm outline-none p-1 rounded-sm py-2 px-14 pl-2"
              type="text">
              </input>
            </div>
            
              
          </div>
        </div>
      </div>

    )
}
export default Home