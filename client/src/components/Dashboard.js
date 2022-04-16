import React from 'react'
import './Dashboard.css'
import {AiFillMedicineBox,AiFillThunderbolt,AiOutlineStop} from "react-icons/ai"
import {ImStatsBars} from "react-icons/im"
import{IoStatsChartSharp} from "react-icons/io5"
import{BsBellSlash} from "react-icons/bs"
// import{AiOutlineStop}  from "react-icons/ai"
// import{AiFillThunderbolt} from "react-icons/ai"
function Dashboard() {
  return (
    <div class="col-sm-9" id='dashboard' >
      

      <div class="row">
        <div class="col-sm-3">
          <div class="well1">
            <div>
            <h4>Medicine </h4>
            <p>19</p>
            </div>
            <AiFillMedicineBox className='logo1'></AiFillMedicineBox>
          </div>
          
        </div>
        <div class="col-sm-3">
          <div class="well2">
            <div>
            <h4>Sales  Of Day</h4>
            <p>00</p> 

            </div>
            
            <ImStatsBars className='logo1'></ImStatsBars>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="well3">
            <div>
            <h4>Sales Of Month</h4>
            <p>00</p> 
             </div>
            
            <IoStatsChartSharp className='logo1'></IoStatsChartSharp>
          </div>
        </div>
        
      </div>
      <div className='row2'>
      <div class="col-sm-3">
          <div class="well4">
            <div>
            <h4>Stock Shortage</h4>
            <p>03</p> 
            </div>
            <BsBellSlash className='logo1'></BsBellSlash>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="well5">
            <div>
            <h4>Expired Product</h4>
            <p>00</p>
            </div>
            <AiOutlineStop className='logo1'></AiOutlineStop>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="well6">
            <div>
            <h4>Near Expire</h4>
            <p>01</p>
            </div>
            <AiFillThunderbolt className='logo1'></AiFillThunderbolt>
          </div>
        </div>
      </div>
  </div>


  )
}

export default Dashboard