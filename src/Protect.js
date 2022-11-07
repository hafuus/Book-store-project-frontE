import{useContext}from "react";
import {UserContex}from "../src/utils/UserContex"
import {Navigate, Outlet} from "react-router-dom";
function Protect (){
    const {user} = useContext(UserContex);
    return user ? <Outlet/> : <Navigate to = "/login" />;
}
export default Protect;