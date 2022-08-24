import {Link}from "react-router-dom"
import{FiSearch} from "react-icons/fi"
import Signup from "../components/BookCard"
import BookCard from "../components/BookCard"
function Home (){
  
    return(
      <div className="flex flex-col justify-center items-center text-center ">
        <div className=" w-3/4  py-4 border-black  bg-black ">
          <h2 className="text-orange-300 text-4xl font-bold mb-4 pb-7 ">find here your favorite book!</h2>
          <div className="flex items-center  w-96  py-3 pl-60 mb-4 mt-1 gap-4">
           <select className="border-r-2 text-sm p-2 bg-black text-white outline-none  ">
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
              <button className=" bg-orange-300 ml-4 text-white text-lg font-bold p-2 rounded-md">search</button>
            </div>
          
          </div>
        </div>
      
      
      
      <div className="grid grid-cols-3 gap-3 mt-4">
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>


      </div>
    
      
    
    </div>

    )
}
export default Home