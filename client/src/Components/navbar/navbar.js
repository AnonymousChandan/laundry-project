import React ,{useState,useEffect}from 'react';
import './navbar.css'
import {useNavigate} from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogout = ()=> {
    console.log("entered in logout")
    localStorage.setItem("authorization", "");
    navigate("/");
}
const [mainData, setMainData] = useState([])

  
let token =
localStorage.getItem("authorization")

let userEmail = localStorage.getItem("userEmail")

for(let i = 0 ; i < userEmail.length; i++) {
  let splitMail = userEmail.split("")

  if(userEmail[i] === "@") {
    userEmail = splitMail.splice(0, i)
  } 
}


// console.log(userEmail.join(""))

if(token === null) {
  localStorage.setItem("authorization", "")
} else{
  token = token
}




useEffect(() => {
  fetch("https://laundry-backend-nodejs.herokuapp.com/user/details", {
    headers: {
      authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setMainData(data);
    });
    // window.location.reload(false); 
}, [token]);
  
  return (
    <>
     <div className="navbarContainer">
       <div className="navbarLogo">
        <span className="logoContent">LAUNDRY</span>
       </div>
       <div className="navbar-btns">
        {
           token.length ?
           <>
               <button className="n-btns navbarPricing">Pricing</button>
               <button className="n-btns navbarCareer">Career</button>
               <button onClick={handleLogout} style={{width: "214px", fontSize: "16px", paddingLeft: "10px", paddingRight: "10px"}} className="n-btns navbarSignIn"><img style={{width: "43px", borderRadius: "50%"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/><span style={{fontSize: "16px", marginLeft: "20px"}}>{userEmail}</span></button>
           </>
           :
           <>
               <button className="n-btns navbarHome">Home</button>
               <button className="n-btns navbarPricing">Pricing</button>
               <button className="n-btns navbarCareer">Career</button>
               <button className="n-btns navbarSignIn">Sign In</button>
           </>
        }
       </div>
     </div>
    </>
  )
}
export default Navbar