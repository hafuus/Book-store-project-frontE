import { Link } from "react-router-dom"
function BookCard(){
    return(
        <Link to ="/Books">
        <div className=" flex items-center flex-col justify-between rounded-md drop-shadow-md py-7 mr-16 w-3/4 ">
          <div className="">
          <img
            src="https://images.randomhouse.com/cover/9780593355862"
            alt="Book"
            className="h-72 w-48"
          />
         </div>
         <div className=" ">
           <h2 className="font-bold text-xl text-orange-300">paperback</h2>
         </div>
         
       </div>
      </Link>




    )
}
export default BookCard