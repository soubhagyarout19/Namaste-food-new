import { Link, Outlet } from "react-router-dom";
import Profile from "./Inside About/Profile";
const About = ()=>{
    return(
        <>
        <h1>This is about page</h1>
        <Link to="profile">Click Here to go profile</Link>
        <Outlet/>
        </>
    )
}

export default About;