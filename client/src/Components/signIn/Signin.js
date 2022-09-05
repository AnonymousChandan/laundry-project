import React from 'react'
import Bigfooter from '../Footer/Bigfooter'
import SmallFooter from '../Footer/smallFooter'
import Navbar from '../navbar/navbar'
import SignInContainer from './SignInContainer'
const Signin = (props) => {
  return (
    <>
  <Navbar mainData={props.mainData}/>
    <SignInContainer/>
    <Bigfooter/> 
    <SmallFooter/>   
    </>
  )
}

export default Signin