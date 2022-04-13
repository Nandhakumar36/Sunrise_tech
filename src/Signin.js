import './Signin.css';
import profile from "./images/image/a.png";
import email from "./images/image/email.jpg";
import pass from "./images/image/pass.png";
import blue from "./images/image/blue.jpeg";
import React, { useState, useEffect } from "react";
import {signIn} from './services/auth/index'
import { Formik } from "formik";
import {useHistory} from 'react-router-dom'
import {persist} from './services/local-storage/index'

function LoginUi() {
  const history = useHistory()
  return (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values)
            .then((res) => {
              persist("user", res.data.user.name).then(() => { });
              console.log(res.data.user.name)
              history.push('/home')
              setSubmitting(false);
            })
            .catch((e) => {
              alert("sign in: " + e.response.data.message);
              setSubmitting(false);
            });
        }}
    >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
                <div className="main">
                  
                <div className="sub-main">
                
                  <div>
                    
                    <div className="imgs">
                      <div className="title">
                        {/* <img src={profile} alt="profile" className="profile"/> */}
                        <p>sunrise technology</p>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="input-group">
                        <div>
                          <img src={profile} alt="email" className="email"/>
                          <input type="email" id='email' placeholder="user email" className="name" onChange={handleChange} value={values.email}/>
                        </div>
                        <div className="second-input">
                          <img src={pass} alt="pass" className="email"/>
                          <input type="password" id='password' placeholder="password" className="name" onChange={handleChange} value={values.password}/>
                        </div>
                        <div className="login-button">
                        <button disabled={isSubmitting} type='submit' className="signin__button">Login</button>
                        </div>
                      </div>
                    </form>
                    </div>
                  </div>
                  

                </div>
              )}
    </Formik>
  );
}

export default LoginUi;
