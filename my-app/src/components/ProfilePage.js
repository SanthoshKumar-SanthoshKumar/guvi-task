import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"

const  ProfilePage=()=>{
  const history = useNavigate();
  
  const [profile,setLoginData] = useState({
    age:'',
    gender:'',
    dob:'',
    mobile:''
  });
  const getUser = localStorage.getItem("user_login");
  

  const UserLogout=()=>{
    localStorage.removeItem("user_login")
    history("/login")
  }
  
  const handleSubmit=(e)=> {
    e.preventDefault();
    // make API call to update profile with new data

    const getUser = localStorage.getItem("user_login");

    if (getUser&&getUser.length){
      const user = JSON.parse(getUser)
      setLoginData(user);
    }
  }

  return (
    <div className='mt-3 d-flex justify-content-center'>
      {
        getUser.length===0 ? "User Profile Not Found":
      <>
      <div className="container mt-5">
        <section >
            <div className="left-data" style={{width:"100%"}}>
            <h3 className="text-center col-lg-4">User Details</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control type="number" name="age" value={profile.age} placeholder="age" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name="gender" value={profile.gender} placeholder="Gender" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="date" name="dob" value={profile.dob} placeholder="dob" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicConfirmPassword">
                <Form.Control type="tel" name="mobile" value={profile.mobile} placeholder="mobile"/>
              </Form.Group>
              <Button variant="primary"  className="col-lg-6" style={{background:"rgb(67,185,127)"}} type="submit">
                Submit
              </Button>
            </Form>
            </div>
            <div className="right-data mt-5" style={{ width: "100%" }}>
            <Button variant="primary" size="lg"  onClick={UserLogout}> Log Out </Button>{' '}
            </div>
        </section>
      </div>
      </>

      }
    </div>
  )
}

export default ProfilePage;
