import {Link}from "react-router-dom"

function Header (){
    return(
        <div className="bg-black text-white flex justify-between p-7 my-4 ">
            <div className="">
                <Link to = "/Home">
                <h2 className="bg-gray-700 hover:text-red-300 font-bold tex-xl p-2 rounded-md">BOOKSTORE</h2>
                </Link>
            </div>
            <div className=" px-14 space-x-2 ">
                {/* <Link to="/Home" className="hover:text-red-300">Home</Link> */}
                <Link to="/Books" className="hover:text-red-300">Books</Link>
                <Link to="/Contact" className="hover:text-red-300">Contact</Link>
                <Link to="/Bookmark" className="hover:text-red-300">my books</Link>

            </div>
            <Link to="/login" className=" bg-gray-700 font-bold hover:text-red-300 rounded-md p-2 text-sm font-serif drop-shadow-md ">
              Log in
            </Link>
        </div>
        // <div className="bg-[url('../public/download.jpg')] bg-no-repeat  h-[400px] bg-contain  w-full	"></div>
        
    )
        
    
        

      
}
export default Header;