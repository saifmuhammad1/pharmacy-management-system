import React from 'react';
import { Link } from 'react-router-dom';

function FgPass() {
  return <div className='main-container'>
      {/* <div className='container'>
               <form class="forgot passward" id='forgot passward'></form>
               <h1 class="form__title">Recovery</h1>

      </div> */}
      <div className='container'>
      <h1 class ="form__title">Please Enter Your Email </h1>
      <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="Add email" />
                        <div class="form__input-error-message"></div>
                        <button class="form__button" type="submit">Send Email</button>
                    </div>
                    
                    <p class="form__text">
                        <Link to='/login' className="form__link">
                         Login page
                        </Link>
                        
                    </p>
      
      </div>


  </div>;
}

export default FgPass;
