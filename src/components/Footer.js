import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {BsLinkedin } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
function Header (){
    return(
        <div>
            <section class=" bg-black  py-4 mt-10" >
                {/* <h3 className="text-center text-xl font-bold text-gray-300 pb-4 ">socialMedia...</h3> */}
                <div className="flex space-x-5 justify-center items-center pb-14 pb-6 pt-3">
                    {/* <!-- Facebook --> */}
                    <a href=" https://www.facebook.com/login.php" className="socialMedia">
                    <BsFacebook size={25}/>
                    </a>
                    {/* <!-- Twitter --> */}
                    <a href=" https://twitter.com/" className="socialMedia">
                    <BsTwitter size={25}/>
                    </a>
                    

                    {/* <!-- Instagram --> */}
                    <a href=" https://www.instagram.com/" className="socialMedia">
                    <BsInstagram size={25}/>
                    </a>

                    {/* <!-- Linkedin --> */}
                    <a href="https://www.linkedin.com/in/hafsa-ahmed-227a0923b/" className="socialMedia">
                    <BsLinkedin size={25}/>
                    </a>

                    {/* <!-- Github --> */}
                    <a href=" https://github.com/hafuus" className="socialMedia">
                    <BsGithub size={25}/>
                    </a>
                    </div>
                   
                
             
            {/* <!-- Section: Social media --> */}

            {/* contact us */}

            <div className="py-2 px-7">
            <h3 className=" text-xl font-bold text-red-300 ">call us..</h3>
                <div className="text-gray-300 flex text-center ">
                    <BiPhoneCall/>
                    <h3 className="">2526344444444</h3>
                </div>
            </div>

            {/* contact us */}
            </section>
            <p className="text-gray-100 text-center text-bold text-xl pt-2">© Copyright 2022 </p>
           
       </div>
    )
}
export default Header;