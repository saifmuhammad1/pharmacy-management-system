import React from 'react';
// import {Link} from 'react-router-dom'
import Header from './Header';
import Footer from './Footers';
import Dashboard from './Dashboard';
import {useLocation} from 'react-router-dom'
import './home.css'
// import'./Footers.css'


function Home() {

  const location = useLocation()
  console.log(location.state)
  return (
    <div className='home-main-container'>
    <div>
        <Header></Header>
      </div>
      <div><Dashboard></Dashboard></div>

      <div>
      <div class="col-sm-9" id='Medicine' >
      {
          

          location.state &&
          location.state.map(item => (
            <>
            <div className='home-container'>
                <div className='left-home-container'>
                  <img  src={item.images[0].url} alt="i" />
                </div>
              <div className='right-home-container'>
                   <h1>{item.name}</h1>
                   <h2 className='brand'>:{item.brand}</h2>
                   
                   <h2 className='category'> <span>category:</span> {item.category}</h2>
                   <h2 className='Description' > <span className='Description1'> Description</span>:{item.description}</h2>
                   <div className='right-home-container-button'>
                   <h2 className='price'> MRP:{item.price}</h2>
                    <h2 className='quantity'>Quantity:{item.Stock}</h2>
                    </div>
               </div>
            </div> 
            </>
          ))
        }
      </div>
        
      </div>
     <Footer></Footer>
    </div> 
  )
  }

export default Home;
