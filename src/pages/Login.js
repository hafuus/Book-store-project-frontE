import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import{UserContex} from "../utils/UserContex";
function Login() {
  const[inputs,setInputs]=useState({});
   const navigate = useNavigate();
   const {setUser} = useContext(UserContex)
  async function loginBTN(){
    
    try{
      const res = await axios.post("http://localhost:7000/user/logIn" , inputs)
      
      localStorage.setItem("token",res.data.token)
       navigate("/Books")
       setUser(true)
    }catch(e){
      console.log(e.response.data.message)
      
    }
    
  }
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-gray-200 mt-10 rounded-md drop-shadow-md p-7">
        <h2 className="text-center text-2xl font-bold text-red-300">Login</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input type="text" placeholder="Email" className="input" 
         onChange={(e)=> setInputs({...inputs, email:e.target.value})}
          />
          <input type="password" placeholder="Password" className="input"
          onChange={(e)=> setInputs({...inputs, password:e.target.value})}
          />
        </div>
        <div className="flex justify-end pt-3">
          <button onClick={loginBTN} className="btn ">Login </button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Dont have an account?{" "}
            <Link to="/signup" className=" font-bold hover:text-red-300">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
