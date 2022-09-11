import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {BsLinkedin } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";

function Header (){
    return(
        <div>
            <section class=" bg-black" >
                <h3 className="text-center text-xl font-bold text-red-300 pb-6 pt-3">contact us here</h3>
                <div className="flex space-x-5 justify-center items-center pb-14 ">
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
                    <p className="bg-zinc-900 text-gray-100 text-center text-bold text-xl">© Copyright 2022 </p>
                
             </section>
            {/* <!-- Section: Social media --> */}
       </div>
    )
}
export default Header;