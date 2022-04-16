import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Reg.css";

function Login() {
    const [login, setLogin] = useState({ email: "", password: "" });
  const [getError, setGetError] = useState();
  const navigate = useNavigate();

  const handleInput = async (e) => {
    const { name, value } = e.target;

    setLogin({ ...login, [name]: value });
    e.target.classList.remove("error");
    e.target.parentElement.querySelector("span").style.display = "none";
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    const PostUser = await fetch("/v1/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await PostUser.json();

    const errorHandler = (data) => {
      const inputError = document.querySelectorAll(".input-control");
      if (data) {
        inputError.forEach((item) => {
          if (item.value === "") {
            item.classList.add("error");
            item.parentElement.querySelector("span").style.cssText =
              "display: block; color: red";
          }
        });
      }
    };

    if (data.success === false) {
      console.log("Invalid cridentials");
      setGetError(data.message);
      errorHandler(data.message);
    } else {
      console.log("Login successfull");
      setGetError(data.message);
      navigate("/", { replace: false });
    }
  };


  return <div className='main-container'>
      <div className='container'>

      <form class="form" id="login">
                    <h1 class="form__title">LOGIN</h1>
                    <div class="form__message form__message--error"></div>
                    <div>{getError}</div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="admin or email id" value={login.email}  onChange={handleInput} name='email' />
                        <div class="form__input-error-message"></div>
                    </div>
                    <div class="form__input-group">
                        <input type="password" class="form__input" autofocus placeholder="Password" value={login.password}  onChange={handleInput} name='password' />
                        <div class="form__input-error-message"></div>
                    </div>
                    
                    <button class="form__button" type="submit" onClick={loginUser}> Continue</button>
                
                    <p class="form__text">
                        <Link to='/forgotPassword' className='form__text'>
                         Forgot your password?
                        </Link>
                        
                    </p>
                    <p class="form__text">
                        <Link to='/register' className="form__link">
                         Don't have an account? Create account
                        </Link>
                        
                    </p>
                </form>
      </div>
      
    

      
  </div>;
}

export default Login;
