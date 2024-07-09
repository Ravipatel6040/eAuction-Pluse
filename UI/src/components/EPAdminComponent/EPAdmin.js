import "./EPAdmin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _userapiurl } from "../../Api.url";
import { useNavigate } from "react-router-dom";

function EPAdmin() {
  const navigate = useNavigate();

  const [ name , setName ] = useState(); 
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [m ,setM]=useState();
  const [f ,setF]=useState();
  const [output ,setOutput]=useState(); 

  useEffect(() => {
    axios
      .get(_userapiurl + "fetch?email=" + localStorage.getItem("email"))
      .then((response) => {
        var userDetails=response.data[0];
        setName(userDetails.name)
        setEmail(userDetails.email)
        setMobile(userDetails.mobile)
        setAddress(userDetails.address)
        setCity(userDetails.city)

        if(userDetails.gender=="male")
            setM("checked");
        else
        setF("checked")
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit=()=>{

    // let updateDetails={ "condition_obj":{"email":email} , "content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    //   axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
    //     alert("User Details Edit");
    //     setOutput("User Details Edit Successfully")
    //     navigate("/epadmin");  
    //   }); 

  }

  return (
    <>
      {/* About Start */}
      <br />
      <br />
      <br />
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 style={{ color: "#15b9d9" }}>Edit Profile Here !</h1>
              <font color="green">{output}</font>

              <div class="d-flex align-items-center justify-content-center">
                <form>
                  <div class="mb-3 form-control-sm">
                    <label class="form-label">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=" Full Name"
                    />
                  </div>

                  <div class="mb-3 form-control-sm">
                    <label class="form-label">Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=" Email"
                    />
                  </div>

                  

                  <div class="mb-3 form-control-sm">
                    <label class="form-label">Mobile Number</label>
                    <input
                      type="Number"
                      class="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div class="mb-3 form-control-sm">
                    <label class="form-label">Address</label>
                    <textarea
                      type="text"
                      class="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                    ></textarea>
                  </div>

                  <div class="form-group">
                    <label for="city">City</label>
                    <select
                      class="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
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
                  <br />

                  <div class="form-group">
                    <label for="gender">Gender:</label>
                    &nbsp;&nbsp; Male{" "}
                    <input
                      type="radio"
                      value="male"
                      name="gender"
                      checked={m}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    &nbsp;&nbsp; Female{" "}
                    <input
                      type="radio"
                      value="female"
                      name="gender"
                      checked={f}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <br />
                  <br />

                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={handleSubmit}
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      
   
    </>
  );
}
export default EPAdmin;
