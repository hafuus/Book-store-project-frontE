import {Link}from "react-router-dom"
function Header (){
    return(
        <div className="bg-black text-white flex justify-between p-7 my-4 ">
            <div className="">
                <h2>BOOKSTORE</h2>
            </div>
            <div className=" px-14 space-x-2 ">
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Books">Books</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <Link to="/login" className=" font-bold hover:text-brown">
              Log in
            </Link>
        </div>
        // <div className="bg-[url('../public/download.jpg')] bg-no-repeat  h-[400px] bg-contain  w-full	"></div>
        
    )
        
    
        

      
}
export default Header;