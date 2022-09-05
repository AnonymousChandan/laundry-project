import React from 'react'
import Bigfooter from '../Footer/Bigfooter'
import SmallFooter from '../Footer/smallFooter'
import Navbar from '../navbar/navbar'
// import Navbaruser from '../navbar/navbaruser'/
import SignUpContainer from './SignUpContainer'


const SignUp = (props) => {
  return (
    <>
    <Navbar mainData={props.mainData}/>
    <SignUpContainer/>
    <Bigfooter/>
    <SmallFooter/>
</>
  )
}

export default SignUp