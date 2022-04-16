import React from 'react';

function Reset(){
    return <div className='main-container'>
               <div className='container'>
                  <h1 class ="form__title">Reset Password </h1>
                  <div class="form__message form__message--error"></div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="add password " />
                        <div class="form__input-error-message"></div>
                       
                    </div>
                    <div class="form__input-group">
                        <input type="text" class="form__input" autofocus placeholder="confirm password" />
                        <div class="form__input-error-message"></div>
                        {/* <button class="form__button" type="submit">Send Email</button> */}
                    </div>
                    <button class="form__button" type="submit">Reset</button>
                    
                        
                </div>       

</div>
}

export default Reset;