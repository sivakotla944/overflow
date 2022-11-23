import React  from "react";

import pen from "../../assets/pen.svg";
import comment from "../../assets/comment.png";
import blacklogo from "../../assets/favicon copy.png";

const Widget =()=>{
    return(
        <div className="widget">
  <h4>The Overflow blog</h4>
  <div className="right-sidebar-div-1">
    <div className="right-sidebar-div-2">
    <img style={{width:"20px"}} src={pen} alt="pen"/>
    <p>Obesrvebility is the key to the feature of software (and your devops carrer)  </p>
    </div>

    <div className="right-sidebar-div-2">
    <img style={{width:"20px"}} src={pen} alt="pen"/>
    <p>Podcast 374: HHow valuable is your screen name?</p>
    </div>


  </div>

  <h4>Featured on Meta</h4>
  <div className="right-sidebar-div-1">
    <div className="right-sidebar-div-2">
    <img style={{width:"20px"}} src={comment} alt="pen"/>
    <p>Reviews  queue workflows : final release.....</p>
    </div>

    <div className="right-sidebar-div-2">
    <img style={{width:"20px"}} src={comment} alt="pen"/>
    <p>Please welcome valued associates : #958 :v-2blast</p>
    </div>

    <div className="right-sidebar-div-2">
    <img style={{width:"20px"}} src={blacklogo} alt="pen"/>
    <p>Outdated answer : expected answer is now updated on stackoverflow </p>
    </div>


  </div>


  <h4>Hot Meta Posts</h4>
  <div className="right-sidebar-div-1">
    <div className="right-sidebar-div-2">
<p>38</p>
    <p>why was tje span tag declined,  yet the question marked as spam?</p>
    </div>

    <div className="right-sidebar-div-2">
  <p>20</p>
    <p>What is the best course of action when a user  have high rep to</p>
    </div>

    <div className="right-sidebar-div-2">
   <p>14</p>
    <p>Is is a link to "How TO Ask " help page as usuful comment</p>
    </div>


  </div>
        </div>
    )
}

export default Widget