import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import { useNavigate } from 'react-router-dom'; 

function Login() {

   const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();    

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};

    axios.post(_userapiurl+"login",userDetails).then((response)=>{
      var users = response.data.userDetails;
      localStorage.setItem("token",response.data.token);                
      localStorage.setItem("_id",users._id);
      localStorage.setItem("name",users.name);
      localStorage.setItem("email",users.email);
      localStorage.setItem("mobile",users.mobile);
      localStorage.setItem("address",users.address);
      localStorage.setItem("city",users.city);
      localStorage.setItem("gender",users.gender);
      localStorage.setItem("info",users.info);
      localStorage.setItem("role",users.role);
     users.role =="admin"?navigate("/admin"):navigate("/user");
    }).catch((error)=>{
      setOutput("Invalid user  verify your account....");
      setEmail("");
      setPassword("");
    });

  };

    return(
        <>
        
        <h1 style={{ color: "#15b9d9" }}>Login Here !</h1>
        <font color="green">{output}</font>
     
      
      <div class="d-flex align-items-center justify-content-center">
        <form>
          <div class="mb-3 form-control-sm">
            <label  class="form-label">Email Address</label>
            <input type="text"class="form-control" value ={email} onChange={e => setEmail(e.target.value)}placeholder=" Email"/>
          </div>

          <div class="mb-3 form-control-sm">
            <label  class="form-label">Enter Password</label>
            <input type="password"class="form-control" value ={password} onChange={e => setPassword(e.target.value)}placeholder=" Password"/>
          </div>
          <br/>
          <button type="button" class="btn btn-success" onClick={handleSubmit}>
            submit
          </button>
        </form>

      </div>
         



        </>
    );

}
export default Login;