import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
    const history = useNavigate();

    const [inpval,setInpval] = useState({
        email:"",
        password:"",
    })

    console.log(inpval)
    const getData = (e)=>{
            //console.log(e.target.value);
            const {value,name,}= e.target
            setInpval(()=>{
                return {
                    ...inpval,
                    [name]:value
                }
            })
    }

    const addData = (e)=>{
        e.preventDefault();
        //console.log(inpval)

        const getUserArray = localStorage.getItem("userDetails")

        const {email,password}= inpval;
         if (email===""){
             alert("email field is required")
        }else if (!email.includes("@")){
            alert("Plz enter valid email address")
        }else if (password===""){
            alert("password field is required")
        }else{
            if (getUserArray && getUserArray.length){
                const userData = JSON.parse(getUserArray);
                
                const userLogin = userData.filter((ele,key)=>{
                    return ele.email===email && ele.password===password
                });
                if(userLogin.length===0){
                    alert("invalid details")
                }
                else{
                    localStorage.setItem("user_login",JSON.stringify(getUserArray));
                    history("/details")
                }
            }
        }
    }

  return (
    <div className="container mt-5">
        <section className="d-flex justify-content-between">
            <div className="left-data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-4">Log In</h3>
            <Form>
            
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary"  onClick = {addData} className="col-lg-6" style={{background:"rgb(67,185,127)"}} type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">If you dont Have an Account plz <span><Link to="/">SignUp</Link></span></p>
            </div>
            <div className="right-data mt-5" style={{ width: "100%" }}>
                <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1674876474/Screenshot_20230128_085721_mgihvp.png" style={{ maxWidth: 480 }} alt="logo" />
            </div>
        </section>
      </div>
  )
}

export default Login
