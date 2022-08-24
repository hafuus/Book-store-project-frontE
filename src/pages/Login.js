import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
function Login() {
  const[inputs,setInputs]=useState({});
   const navigate = useNavigate();
  async function loginBTN(){
    try{
      const res = await axios.post("http://localhost:7000/user/logIn" , inputs)
      console.log(res)
      
       navigate("/home")
    }catch(e){
      console.log(e.response.data.message)
      
    }
    
  }
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-black mt-10 rounded-md drop-shadow-md">
        <h2 className="text-center text-xl font-bold text-white">Login</h2>
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
            <Link to="/signup" className=" font-bold hover:text-orange-300">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
