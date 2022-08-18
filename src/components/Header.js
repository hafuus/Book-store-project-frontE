import {Link}from "react-router-dom"
function Header (){
    return(
        <div className="bg-black text-white flex justify-between p-7 my-4 ">
            <div className="">
                <Link to = "/Home">
                <h2 className="bg-orange-300 font-bold tex-xl p-2 rounded-md">BOOKSTORE</h2>
                </Link>
            </div>
            <div className=" px-14 space-x-2 ">
                <Link to="/Home" className="hover:text-orange-300">Home</Link>
                <Link to="/About" className="hover:text-orange-300">About</Link>
                <Link to="/Books" className="hover:text-orange-300">Books</Link>
                <Link to="/Contact" className="hover:text-orange-300">Contact</Link>
            </div>
            <Link to="/login" className=" font-bold hover:text-orange-300 rounded-md p-2 text-lg">
              Log in
            </Link>
        </div>
        // <div className="bg-[url('../public/download.jpg')] bg-no-repeat  h-[400px] bg-contain  w-full	"></div>
        
    )
        
    
        

      
}
export default Header;