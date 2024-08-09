import { useState } from "react";
import { imglogo } from "./Constant";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./utils/store";

const Logo = () => {
  return (
    <div className="logo">
      <img src={imglogo} alt="" />
      <h4>Food Plazza</h4>
    </div>
  );
};

const Location = () => {
  return <h4 id="nav-location">Marathahalli,Marathahalli Village</h4>;
};
const Header = () => {
  const [isLogged ,setIsLogged] = useState("true");
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return (
    <div className="navbar">
      <Logo />
      <Location />
      <div className="nav-right">
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/about"><h4>About</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
        <Link to="/cart"><h4>Cart-{cartItems.length}</h4></Link>
        <img src="" alt="" />

            {isLogged == "true" ? (
          <button onClick={()=>setIsLogged("false")}><Link to="/login">Login</Link></button>
        ) : (
          <button onClick={()=>setIsLogged("true")}><Link to="/">Logout</Link></button>
        )}

      </div>
    </div>
  );
};

export default Header;
