import React ,{useEffect} from "react";
import {Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import search from '../../assets/search-svgrepo-com.svg';
import Avatar from '../Avatar/Avatar';
import { useSelector, useDispatch ,  } from "react-redux";

import './navbar.css';
import { setCurrentUser } from "../../actions/currentUser";



const Navbar = () =>{
    const dispatch =useDispatch()

    var User =useSelector((state)=> (state.currentUserReducer))


    useEffect(()=>{

        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    },[dispatch])


return(
  
<nav className="main-nav">
    <div className="navbar">
        <Link to="./" className="nav-item  nav-logo"  >
     <img src={logo} alt="logo" className="logo1" />
        </Link>
        <Link to="./" className="nav-item  nav-btn"  >About</Link>
        <Link to="./" className="nav-item  nav-btn"  >Products</Link>
        <Link to="./" className="nav-item  nav-btn"  >For Teams</Link>
        <form >
            <input type="text" placeholder="search"/>
            <img src={search} alt="serach" width="18" className="search-icon"/>
        </form>
        
       {User === null ?
    <Link to="/Auth"  className="nav-item nav-links">Login</Link> :
    <>
    <Avatar backgroundColor="#009dff" px="10px" py="7px "  borderRadius="50%" color="White" ><Link to="/User" style={{color :"white" , textDecoration:"none"}} className="profile">M</Link></Avatar>
 
    <button className="nav-item nav-links">Logout</button>
    </>
    }


    </div>
</nav>
    
)
}


export default Navbar