import './header.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

  const [ HeaderContent , setHeaderContent ] = useState();
  
  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")    
    {
        setHeaderContent(<>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/manageusers">Manageusers</Link></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                            <a class="dropdown-item"><Link  to="/epadmin">Edit Profile</Link></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" >Manage Category</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item"><Link  to="/addcategory">Add Category</Link></a>
                            <a class="dropdown-item"><Link to="/addsubcategory">Add SubCategory</Link></a>
                        </div>
                    </div>
                </div>
                <a class="btn btn-primary rounded-pill px-3 d-none d-lg-block" ><Link to="/logout" style={{"color":"white"}} >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
                {/* <a class="nav-item nav-link active"><Link to="/logout">Logout</Link></a> */}
            </div>
        </>);
    }
    else  if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
    {

      setHeaderContent( 
      <>

        <div class="collapse navbar-collapse" id="navbarCollapse">
           <div class="navbar-nav ms-auto py-0">

            
           <a class="nav-item nav-link"><Link to="/user">User Home</Link></a>
           <a class="nav-item nav-link"><Link to="/addproduct">Add Product</Link></a>
        
           <a class="nav-item nav-link active"><Link to="/viewpc">View Product</Link></a>
           <a class="nav-item nav-link"><Link to="/viewbidp">View Bid Product</Link></a>
           <div class="nav-item dropdown">
                        <a  id="se"href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"blue"}}>Settings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                            <a class="dropdown-item"><Link  to="/epadmin">Edit Profile</Link></a>
                            
                        </div>
                    </div>
                    
           
            
          <a class="nav-item nav-link active"><Link to="/logout">Logout</Link></a>
           </div>
         </div>
     
     </>)

      
      
    }
    else
    {
      setHeaderContent(<>

         <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
               
             
              <a class="nav-item nav-link"><Link to="/about">About</Link></a>
               
              <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
              
              <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  data-bs-toggle="dropdown"><Link to="/page">Page</Link></a>
                  
                 <div class="dropdown-menu m-0">
                  <a  class="dropdown-item"><Link to="/appointment">Appointment</Link></a>
                   
                  <a  class="dropdown-item"><Link to="/features">Features</Link></a>
                    
                  <a  class="dropdown-item"><Link to="/our blog">Our Blog</Link></a>
                   
                </div>
              </div>
              <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
             
              <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
            </div>
          </div>
      
      


      
      
      </>)
    }

   });



    return(
        <>

         <Auth/>


         <div class="container-fluid bg-dark px-5 d-none d-lg-block">
            <div class="row gx-0 align-items-center" style={{"height": "45px"}}>
                <div class="col-lg-8 text-center text-lg-start mb-lg-0">
                    <div class="d-flex flex-wrap">
                        <a href="#" class="text-light me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                        <a href="#" class="text-light me-4"><i class="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                        <a href="#" class="text-light me-0"><i class="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
                    </div>
                </div>
                <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-flex align-items-center justify-content-end">
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-3"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="btn btn-light btn-square border rounded-circle nav-fill me-0"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        

         

         {/* Navbar & Hero Start */}
      <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <a href="index.html" class="navbar-brand p-0">
            <h1 class="text-primary m-0">
              <img src="assets/img/logo.jpg" /> &nbsp;Auction Pulse
            </h1>
            {/* <img src="img/logo.png" alt="Logo">*/}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars"></span>
          </button>

           
          { HeaderContent}



          
        </nav>
        </div>

        
 
       
      {/* Navbar & Hero End*/}


       

        </>
  );
  





  

}

export default Header;