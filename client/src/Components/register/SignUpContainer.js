import React from 'react'
import './Signupcontainer.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUpContainer = () => {
    const [agree, setAgree] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    const [district, setDistrict] = useState("")
    const [error, setError] = useState(false)


    const history = useNavigate();
    const handleRoute = () => {
        history("/")
    }
    const handleregister = () => {
        if (agree === false) {
            setError(true)
            return
        }
        else if (name === "") {
            setError(true)
            return
        }
        else if (email === "") {
            setError(true)
            return
        }
        else if (phone === "") {
            setError(true)
            return
        }
        else if (state === "") {
            setError(true)
            return
        }
        else if (password === "") {
            setError(true)
            return
        }
        else if (address === "") {
            setError(true)
            return
        }
        else if (pincode === "") {
            setError(true)
            return
        }
        else if (district === "") {
            setError(true)
            return
        }
        else {
            setError(false)
            handleServer()
        }

    }

    // console.log(name)



    const handleServer = () => {
        // console.log(JSON.stringify({
        //     name,
        //     email,
        //     phone,
        //     district,
        //     state,
        //     pincode,
        //     password,
        //     address
        // }))
        fetch("http://localhost:3001/user/register", {
            method: "post",
            body: JSON.stringify({
                name,
                email,
                phone,
                district,
                state,
                pincode,
                password,
                address
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res)
            handleRoute()
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <div className='signupcontainer'>
                <div className='signupcontainer-left'>
                    <h1 className='signup-maincontainer-laundryheading'>Laundry Service</h1>
                    <p className='signup-maincontainer-laundrydescription'>Doorstep Wash & Dryclean Service</p>
                    <p className='signup-maincontainer-alreadyhaveaccount'>Already Have Account</p>
                    <button className='signup-maincontainer-registerbutton' onClick={handleRoute}>Sign In</button>
                </div>
                <div className='signupcontainer-right'>
                    <p className='signup-maincontainer-registerheading'>
                        REGISTER
                    </p>
                    <div className='register-input'>
                        <div className='register-input-width50'>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" onChange={(e) => { setName(e.target.value) }} />
                                <span class="placeholder">Name</span>
                            </label>
                            <br></br>
                            <p id='errorname'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="number" placeholder="&nbsp;" onChange={(e) => { setPhone(e.target.value) }} />
                                <span class="placeholder">Phone</span>
                            </label>
                            <br></br>
                            <p id='errorphone'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" onChange={(e) => { setState(e.target.value) }} />
                                <span class="placeholder">State</span>
                            </label>
                            <br></br>
                            <p id='errorstate'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" onChange={(e) => { setAddress(e.target.value) }} />
                                <span class="placeholder">Address</span>
                            </label>
                            <br></br>
                            <p id='erroraddress'></p>
                        </div>
                        <div className='register-input-width50'>
                            <label class="custom-field two">
                                <input type="email" placeholder="&nbsp;" onChange={(e) => { setEmail(e.target.value) }} />
                                <span class="placeholder">Email</span>
                            </label>
                            <br></br>
                            <p id='erroremail'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" onChange={(e) => { setPassword(e.target.value) }} />
                                <span class="placeholder">Password</span>
                            </label>
                            <br></br>
                            <p id='errorpassword'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" onChange={(e) => { setDistrict(e.target.value) }} />
                                <span class="placeholder">District</span>
                            </label>
                            <br></br>
                            <p id='errordistrict'></p>
                            <br></br>

                            <label class="custom-field two">
                                <input type="number" placeholder="&nbsp;" onChange={(e) => { setPincode(e.target.value) }} />
                                <span class="placeholder">Pincode</span>
                            </label>
                            <br></br>
                            <p id='errorpincode'></p>
                        </div>
                    </div>
                    <p className='register-agree'>

                        <p style={{ textDecoration: "underline" }}>
                            <input type="checkbox" className='register-checkbox' onClick={() => { setAgree(!agree) }} ></input>
                            I agree to Terms & Condition receiving marketing and promotional materials.</p>
                        <div>
                            <p id='signup-error'>{error ? "Please Enter all the details and agree our terms and conditions before registering" : ""}</p>
                        </div>
                        <button className='registerbtn' onClick={handleregister}>Register</button>

                    </p>

                </div>
            </div>
        </>
    )
}

export default SignUpContainer