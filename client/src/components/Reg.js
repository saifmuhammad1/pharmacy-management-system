import React from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "../components/Reg.css";

function Reg() {

    const [register, setRegister] = useState({ name: "", email: "", password: "" });
  const [message, setmessage] = useState();
  const navigate = useNavigate();

  const handleInputs = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });

    e.target.classList.remove("error");
    e.target.parentElement.querySelector("span").style.display = "none";
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = register;

    const PostUser = await fetch("/v1/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await PostUser.json();

    if (data.success === false) {
        console.log("Invalid Registeration");
        setmessage(data.message);
      } else {
        console.log("Registeration successfull");
        setmessage(data.message);
        navigate("/login", { replace: false });
      }
    };

  return <div className='main-container'>
        <div className='container'>
               
            <form class="form form--hidden" id="createAccount">
                <h1 class="form__title">Create Account</h1>
                <div className="err_msg">{message}</div>
                <div class="form__input-group">
                    <input type="text" value={register.name} onChange={handleInputs} id="signupUsername" class="form__input" name='name'  placeholder="Username" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="text" value={register.email} onChange={handleInputs}class="form__input" name='email'  placeholder="Email Address" />
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" value={register.password} onChange={handleInputs} class="form__input" name='password'placeholder="Password" />
                    <div class="form__input-error-message"></div>
                </div>
                {/* <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Confirm password" />
                    <div class="form__input-error-message"></div>
                </div> */}
                
                <button class="form__button" onClick={PostData} type="submit">Continue</button>
        
                <p class="form__text">
                    <Link to='/login' className="form__link" >
                    Already have an account? Sign in
                    </Link>
                </p>
            
            </form>
        </div>
    </div>;
    
}

export default Reg;

