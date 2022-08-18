import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signup() {
  const [inputs , setInput ] = useState({});

  async function SignupBtn(){
    try{
      
      const res = await axios.post("http://localhost:7000/user/signup")
      console.log(res)
    }
    catch(e){
       console.log(e.response.data.message)
        }
        
    }
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-black mt-10 rounded-md drop-shadow-md p-10">
        <h2 className="text-center text-xl font-bold text-white">Sign up</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input type="text" placeholder="Name" className="input"
          onChange={(e)=> setInput({...inputs, name:e.target.value})} />
          <input type="text" placeholder="Email" className="input" 
          onChange={(e)=> setInput({...inputs, email:e.target.value})}/>
          <input type="password" placeholder="Password" className="input"
          onChange={(e)=> setInput({...inputs, password:e.target.value})} />
          <input type="password" placeholder="Confirm Password" className="input"
          onChange={(e)=> setInput({...inputs, confirmPassword:e.target.value})}/>
        </div>
        <div className="flex justify-end pt-3">
          <button className="btn " onClick={SignupBtn}>Sign up</button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className=" font-bold hover:text-orange-300">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
