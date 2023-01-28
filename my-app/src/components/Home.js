import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom"

const Home = () => {

    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [data]=useState([]);

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
        const {name,email,password,confirmpassword}= inpval;
        if (name===""){
            alert("name field is required")
        }else if (email===""){
             alert("email field is required")
        }else if (!email.includes("@")){
            alert("Plz enter valid email address")
        }else if (password===""){
            alert("password field is required")
        }else if (confirmpassword===""){
            alert("confirmpassword field is required")
        }else if (password.length<5){
          alert("password length must be greater than five")
        }
        else if (password!==confirmpassword){
            alert("password and confirm password are not same")
        }else{
            localStorage.setItem("userDetails",JSON.stringify([...data,inpval]));
            alert("Account Created Successfully Login and continue")
        }
    }

  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
            <div className="left-data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-4">Sign Up</h3>
            <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control type="text" name="name" onChange={getData} placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicConfirmPassword">
                <Form.Control type="text" name="confirmpassword" onChange={getData} placeholder="confirm password" />
              </Form.Group>
              <Button variant="primary"  onClick = {addData} className="col-lg-6" style={{background:"rgb(67,185,127)"}} type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have an Account <span><Link to="/login">LogIn</Link></span></p>
            </div>
            <div className="right-data mt-5" style={{ width: "100%" }}>
                <img src="https://res.cloudinary.com/dijwul6ub/image/upload/v1674876474/Screenshot_20230128_085721_mgihvp.png" style={{ maxWidth: 480 }} alt="logo" />
            </div>
        </section>
      </div>
    </>
  );
};

export default Home;
