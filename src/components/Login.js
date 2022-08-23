import classes from './css/style.module.css';
import React, { useRef, useState } from "react";

import {} from './vendor/bootstrap/css/bootstrap.min.css';
import swal from 'sweetalert';



async function loginUser(credentials) {
  return fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


function Login(){
  const emailEntered=useRef();
  const passwordEntered=useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userNameValid, setuserNameValid] = useState(true);
    const [passwordValid, setpassworValid] = useState(true);
 
    const userNameChangeHandler = (event) =>{
      setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) =>{
      setPassword(event.target.value);
    }
 

    const formHandler=async e=>{
      e.preventDefault();
      if(email.trim().length ===0){
        setuserNameValid(false);
        return;
      }

      if(password.trim()===''){
        setpassworValid(false);
        // setPassword('');
        return;
      }

      // setuserNameValid(true);
      // setpassworValid(true);
      console.log(emailEntered.current.value);
      console.log(passwordEntered.current.value);
      console.log("userNameValid"+userNameValid);


      const response = await loginUser({
        email,
        password
      });

      if ('token' in response) {
        swal("Success", "Login SUCcESS", "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['token']);
          //localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/profile";
        });
        console.log("success");
      } else {
        console.log("failed");
        swal("Failed", response.error, "error");
        setEmail('');
        setPassword('');
      }       
    }

    return (
        <main>
        <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt=""/>
                  <span className="d-none d-lg-block">Health Care System</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation"  method="POST" onSubmit={formHandler}>

                    <div className="col-12">
                      {/* <label htmlFor="yourUsername" className="form-label">Username</label> */}
                      <div className="input-group has-validation">
                        {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input type="text" name="email" className="form-control" id="yourUsername" placeholder="Username" onChange={userNameChangeHandler} ref={emailEntered}/>
                        {!userNameValid && <div className={classes.invalid}>Please enter your username.</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      {/* <label htmlFor="yourPassword" className="form-label">Password</label> */}
                      <input type="password" name="password" className="form-control" id="yourPassword" placeholder="Password" onChange={passwordChangeHandler} ref={passwordEntered}/>
                       {!passwordValid && <div className={classes.invalid}>Please enter your Password!</div>}
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

             

            </div>
          </div>
            </div>
            </section>
        </div>
        </main>
      );
}
export default Login;