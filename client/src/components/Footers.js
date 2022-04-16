import React from 'react'
import'./Footers.css'
import {FiPhoneCall} from"react-icons/fi"
import{MdOutlineEmail} from "react-icons/md"

function footers() {
  return (
    <div class="col-sm-9" id='Footer' >
    <footer class="page-footer ">


     <div className='left-footer-container'>
       <h1>MED.</h1>
       {/* <h2>pharmacy managemnt syte</h2> */}
       <div class="footer-copyright text-center py-3">© 2022 Copyright:
       <a href="/"> MED.com</a>
      </div>
      </div>

      <div classname='middle-footer-container'>
        <h1 className='about1'>About</h1>
        <p>Our Website Helps the System to Stores Data and Enables Functionality that Organizes and Maintains the Medication Use Process within Pharmacies.</p>
        
      </div>

      <div className='right-footer-container1'>
        <div className=' contact-icon'>
          <FiPhoneCall className='footer-icon'></FiPhoneCall>
        <h1 >+91 7506626808,9082425683</h1>
        </div>
        <div className='contact-icon'>
        <MdOutlineEmail className='footer-icon'></MdOutlineEmail>
      <h1>pharmacymanagement8@gmail.com</h1>

        </div>
         
    

      </div>
      

      


</footer>
</div>
  
  )

}

export default footers