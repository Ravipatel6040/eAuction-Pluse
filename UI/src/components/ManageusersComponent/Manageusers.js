import './Manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom';

function Manageusers() {

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((response)=>{
      setUserDetails(response.data);  
    }).catch((error)=>{
      console.log(error);   
    });
  });      

  const changeStatus=(s,_id)=>{
    if(s=="block")
    {
      let updateDetails={ "condition_obj":{"_id":_id} , "content_obj":{"status":0}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User blocked.....");
        navigate("/manageusers");  
      });    
    }
    else if(s=="verify")
    {
      let updateDetails={ "condition_obj":{"_id":_id} , "content_obj":{"status":1}};
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        alert("User verified.....");
        navigate("/manageusers");  
      });    
    }  
    else
    {
      let deleteDetails={"data":{"_id":_id}};
      axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
        alert("User deleted.....");
        navigate("/manageusers");  
      });
    }
  };
    return(
        <>
      {/* About Start */}
      <br/><br/><br/>
      <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
    <h1 class="mb-4" style={{"color":"#15b9d9"}}>View & Manage Users Details</h1>
  
    <table className="table table-bordered">
    <thead>
        <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>City</th>
            <th>Gender</th>
            <th>Info</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {userDetails.map((row) => (
            <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.mobile}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.gender}</td>
                <td>{row.info}</td>
                <td>
                    {row.status === 1 ? (
                        <span className="text-success">Verify</span>
                    ) : (
                        <span className="text-danger">Blocked</span>
                    )}
                </td>
                <td>
                    {row.status === 1 ? (
                        <span
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => changeStatus('block', row._id)}
                        >
                            Change Status
                        </span>
                    ) : (
                        <span
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => changeStatus('verify', row._id)}
                        >
                            Change Status
                        </span>
                    )}
                    <br />
                    <span
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => changeStatus('delete', row._id)}
                    >
                        Delete
                    </span>
                </td>
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
export default Manageusers ;