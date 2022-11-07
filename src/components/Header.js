import {Link , Navigate, useNavigate}from "react-router-dom"
import { BsPlus } from "react-icons/bs";
import {useEffect , useContext} from "react"
import{UserContex} from "../utils/UserContex"
import { TbUserCircle } from "react-icons/tb";

function Header (){
        const {user} = useContext(UserContex);
        const token = localStorage.getItem("token")
        const Navigate = useNavigate();
        function logout(){
            localStorage.removeItem("token")
            Navigate("/login")
        }
    return(
        <div className="bg-black text-white flex justify-between items-center p-7">
            <div className="">
                <Link to = "/Books">
                <h2 className="bg-gray-700 hover:text-red-300 font-bold tex-xl p-2 rounded-md">BOOKSTORE</h2>
                </Link>
            </div>
            <div className=" px-14 space-x-2 ">
            {/* {user ?(
                <> */}
                {/* <Link to="/Home" className="hover:text-red-300">Home</Link> */}
                <Link to="/Books" className="hover:text-red-300">Books</Link>
                <Link to="/Contact" className="hover:text-red-300">Contact</Link>
                <Link to="/Bookmark" className="hover:text-red-300">my books</Link>

            </div>
          
             <div className="space-x-2 flex">
                {/* {token &&  */}
                {user ?(
                <>
              <Link to="/bookDB"  className=" bg-red-300 font-bold hover:text-red-300 rounded-md p-2 text-sm  ">
              Add
             </Link>
             <button className=" bg-gray-700 font-bold hover:text-red-300 rounded-md p-2 text-sm  " onClick={logout}>
             Log out
           </button>
           <Link to="/Bookmark"  className=" hover:text-red-300 rounded-md   ">
             <TbUserCircle size={35}/>
             </Link>
           </>
            //  {!token && 
            ) : (
             <Link to="/login" className=" bg-gray-700 font-bold hover:text-red-300 rounded-md p-2 text-sm  ">
              Log in
            </Link>
             )}
             </div>
            
           
        </div>
        // <div className="bg-[url('../public/download.jpg')] bg-no-repeat  h-[400px] bg-contain  w-full	"></div>
        
    )
        
    
        

      
}
export default Header;