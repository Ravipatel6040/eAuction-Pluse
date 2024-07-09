import "./App.css";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/BannerComponent/Banner";
import Header from "./components/HeaderComponent/header";


import Home from "./components/HomeComponent/home";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import Service from "./components/ServiceComponent/Service";
import Register from "./components/RegisterComponent/Register";
import Login from "./components/LoginComponent/Login";
import Logout from "./components/LogOutComponent/Logout";
import Footer from "./components/FooterComponent/footer";
import Adminhome from "./components/AdminhomeComponent/Adminhome"
import CPAdmin from "./components/CPAdminComponent/CPAdmin";
import EPAdmin from "./components/EPAdminComponent/EPAdmin";
import Manageuser from "./components/ManageusersComponent/Manageusers"
import Userhome from "./components/UserhomeComponent/Userhome";
import Viewproductcategory from "./components/ViewProductCategoryComponent/Viewproductcategory"
import Viewproductsubcategory from "./components/ViewProductSubCategoryComponent/Viewproductsubcategory"
import Addcategory from "./components/AddcategoryComponent/Addcategory";
import Addsubcategory from "./components/AddsubcategoryComponent/Addsubcategory";
import Addproduct from "./components/AddproductComponent/Addproduct";
import Viewproduct from "./components/ViewProductComponent/Viewproduct";
import Bidproduct from "./components/BidproductComponent/Bidproduct";
import Viewbid from "./components/ViewbidComponent/Viewbid";
import Viewbidproduct from "./components/ViewbidproductComponent/Viewbidproduct";


function App() {
  return (
    <>
     <Header/>
     <Banner/>
     <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/admin" element={<Adminhome />} ></Route>
      <Route path="/cpadmin" element={<CPAdmin />} ></Route>
      <Route path="/epadmin" element={<EPAdmin/>} ></Route>
      <Route path="/addsubcategory" element={<Addsubcategory/>} ></Route>
      <Route path="/addcategory" element={<Addcategory/>} ></Route>
      <Route path="/manageusers"element={<Manageuser/>}></Route>
      <Route path="/user" element={<Userhome />} ></Route>
      <Route path="/addproduct" element={<Addproduct/>} ></Route>
      <Route path="/viewpsc/:catnm" element={<Viewproductsubcategory/>} ></Route>

      <Route path="/viewp/:subcatnm" element={<Viewproduct/>} ></Route>
      <Route path="/bidp/:_id" element={<Bidproduct/>} ></Route>
      <Route path="/viewpc" element={<Viewproductcategory />} ></Route>
      <Route path="/viewbid/:p_id" element={<Viewbid />} ></Route>
      <Route path="/viewbidp" element={<Viewbidproduct />} ></Route>
      <Route path="/logout" element={<Logout/>} ></Route>

      </Routes> 
    
  

    
     <Footer/>







     
    </>
  );
}
export default App;
