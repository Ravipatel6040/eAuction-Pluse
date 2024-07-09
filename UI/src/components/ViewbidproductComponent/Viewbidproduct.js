import './Viewbidproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {_productapiurl} from '../../Api.url';
import { Link} from 'react-router-dom';

function Viewbidproduct() {

 
  const [ pDetails , setProductDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_productapiurl+"fetch?uid="+localStorage.getItem("email")).then((response)=>{
      setProductDetails(response.data);  
    }).catch((error)=>{
      console.log(error);   
    });
  });      

 

    return(
        <>
      {/* About Start */}
      <br/><br/><br/>
      <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
    <h1 class="mb-4" style={{"color":"#15b9d9"}}>View Bidding Details !</h1>
  
    <table className="table table-bordered">
    <thead>
        <tr>
            
            <th>ProductID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Base Price</th>
            <th>Product Icon</th>
            <th>Info</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
        {pDetails.map((row) => (
            <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.title}</td>
                <td>{row.subcatnm}</td>
                 <td>{row.description}</td>
                <td>{row.baseprice}</td>
                <td>{row.piconnm}</td>
                <td>{row.info}</td>
                <td><Link to={`/viewbid/${row._id}`}>Show Bid </Link></td>
                
               
            </tr>
        ))}
    </tbody>
</table>




    </div>
                </div>
            </div>
        </div>
        {/* About End */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>


        </>
    );

}
export default Viewbidproduct;