import './Viewbid.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {_bidapiurl} from '../../Api.url';
import { useParams } from 'react-router-dom';

function Viewbid() {


  const params =useParams()
  const [ bidDetails , setBidDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_bidapiurl+"fetch?p_id="+params.p_id).then((response)=>{
      setBidDetails(response.data);  
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
            <th>BiddingID</th>
            <th>ProductID</th>
            <th>UserID</th>
            <th>Bidding Price</th>
            <th>Info</th>
            
        </tr>
    </thead>
    <tbody>
        {bidDetails.map((row) => (
            <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.p_id}</td>
                <td>{row.u_id}</td>
                <td>{row.bidprice}</td>
                <td>{row.info}</td>
                
               
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
export default Viewbid ;