import React from "react";
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom';
import globe from '../../assets/globe.svg';

const LeftSidebar= () =>{
    return (
        <div className="left-sidebar">
           <nav className="side-nav">
                <NavLink to="/" className="Side-nav-links" activeclassname = "active">
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div><p>PUBLIC</p></div>
                    <NavLink to="/Questions" className= "Side-nav-links"  >
                        <img style={{width:"25px"}} src={globe} alt="globe" className="globe-logo" />
                        <p style= {{paddingLeft :"10px" }}>Questions</p>
                    </NavLink>

                    <NavLink to="/Tags" className = "Side-nav-links"  style= {{ paddingLeft :"40px"}}>

                    <p>Tags</p>
                    </NavLink>

                    
                    <NavLink to="/Tags" className = "Side-nav-links"  style= {{ paddingLeft :"40px"}}>
                       <p>Users</p> 
                    </NavLink>

                </div>
            </nav>
           



        </div>
    )
}


export default LeftSidebar