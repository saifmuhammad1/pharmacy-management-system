import React, {useState,useEffect} from 'react';
import './Header.css'
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import {Link} from 'react-router-dom'
import adnanlogo from "../images/adnanlogo.jpg"


function Header() {

    const [logoutUser, setLogoutUser] = useState()
    const [product, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    

    const Logout = async ()=>{
        const Fetch = await fetch ('/v1/logout')

        const data = await Fetch.json()
         setLogoutUser(data)
    }

    
  useEffect(() => {
    let isMounted = true;
    const getAllProducts = async () => {
        try {
         
    
        //   console.log(productName);
          const Fetch = await fetch(`/v1/products?keyword=${productName}`);
          const response = await Fetch.json();
    
          if (isMounted) setProducts(response.products);
        //   console.log(product);
    
        
        } catch (error) {
          console.log(error);
        }
      }
      getAllProducts()
      return () => {
        isMounted = false;
      };
   
  },[productName])
  
    

    
      


  return(
   <div>
      <div className="header-main-container">
          <div className='navbar-container'>
         <nav className='navbar'>
             <div className="nav-links-container">
                <div className="left-container">
                    <div className="logo">
                        <img src={adnanlogo}alt="MED" />
                    </div>
                </div>
                <div className="right-container">
                    <div className='upper-left-container'>
                        <div className='upper-container'>
                            <div className='search-container'>
                                <input className='search-input' type="text" placeholder='Search...'  value={productName}  onChange={(e) => setProductName(e.target.value)}/>
                                <Link to='/home' state={product} >
                                <PageviewOutlinedIcon style={{fontSize: 40, color: "grey", cursor: 'pointer'}} />
                                </Link>                                 
                                
                            </div>  
                            
                            <div className='lower-container'>
                                <div className="nav-links">
                                    <a href='#dashboard'>Home</a>
                                </div>
                                {/* <div className="nav-links">
                                    <a>Doctor</a>
                                </div> */}
                                <div className="nav-links">
                                    <a herf='#Medicine'>Medicine</a>
                                </div> 

                                <div className="nav-links">
                                    <a herf='#Footer'>About</a>
                                </div>

                            </div> 
                        </div>
                        <Link to='/login'>
                        <button onClick={Logout} className="nav-links-out" type='button'>
                                Logout
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
         </nav>
         </div>
      </div>
      {/* <div>{product.map((item)=>(
          <>
          <img src={item.images[0].url} alt="" />
          <p>{item.name}</p>
          <p>{item.brand}</p>
          <p>{item.description}</p>
          <p>{item.st}</p>
          <p>MRP: {item.price}</p>
          <p> Quantity {item.Stock}</p>
          
          </>
     
         
      ))}</div> */}
  </div>
  )
}

export default Header;
