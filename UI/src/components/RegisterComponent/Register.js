import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';


function Register() {
  const [ name , setName ] = useState(); 
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput ] = useState();  
    

  const handleSubmit=()=>{
    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
 console.log(userDetails)

    axios.post(_userapiurl+"save",userDetails).then((response)=>{
      setOutput("User registered successfully....");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setCity("");
      setAddress("");    
    }).catch((error)=>{
      console.log(error);
    });

  };

  return (
    <>
      <h1 style={{ color: "#15b9d9" }}>Register Here !</h1>
      <font color="green">{output}</font>
     
      
      <div class="d-flex align-items-center justify-content-center">
        <form>
          <div class="mb-3 form-control-sm">
            <label  class="form-label" >Full Name</label>
            <input type="text"class="form-control" value ={name} onChange={e => setName(e.target.value)} placeholder=" Full Name"/>
          
          </div>

          <div class="mb-3 form-control-sm">
            <label  class="form-label">Email Address</label>
            <input type="text"class="form-control" value ={email} onChange={e => setEmail(e.target.value)}placeholder=" Email"/>
          </div>

          <div class="mb-3 form-control-sm">
            <label  class="form-label">Enter Password</label>
            <input type="password"class="form-control" value ={password} onChange={e => setPassword(e.target.value)}placeholder=" Password"/>
          </div>

          <div class="mb-3 form-control-sm">
            <label  class="form-label">Mobile Number</label>
            <input type="Number"class="form-control"value ={mobile} onChange={e => setMobile(e.target.value)}placeholder="Phone Number"/>
          </div>
          

          <div class="mb-3 form-control-sm">
            <label  class="form-label">Address</label>
            <textarea type="text"class="form-control"value ={address} onChange={e => setAddress(e.target.value)}placeholder="Address"></textarea>
          </div>

          
  <div class="form-group">
    <label for="city">City</label>
    <select class="form-control" value ={city} onChange={e => setCity(e.target.value)}>
        <option>Select City</option>
        <optgroup label="MP">
        <option>Indore</option>
        <option>Ujjain</option>
        <option>Bhopal</option>
        </optgroup>
        <optgroup label="MH">
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Nasik</option>
        </optgroup>
    </select>
  </div>
  <br/>

  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    Male <input type="radio" value="male" name="gender" onChange={ e => setGender(e.target.value) } />
    &nbsp;&nbsp;
    Female <input type="radio" value="female" name="gender" onChange={ e => setGender(e.target.value) } />
  </div>
  <br/><br/>
          
          <button type="button" class="btn btn-success" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
