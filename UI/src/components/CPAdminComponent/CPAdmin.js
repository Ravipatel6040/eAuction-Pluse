import './CPAdmin.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { _userapiurl } from "../../Api.url";



function CPAdmin()
{
    const [output ,setOutput]=useState();
    const [opass , setOldPassword]=useState();
    const [npass , setNewPassword]=useState();
    const [cnpass ,  setConfromNewPassword]=useState();

    const handleSubmit=()=>{
        axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then((response)=>{
         if(npass==cnpass)
         {
            {
                let updateDetails={ "condition_obj":{"email":localStorage.getItem("email")} , "content_obj":{"password":cnpass}};
                axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
                    alert("Edit Password")
                  setOutput("Password edited successfully");
                  setOldPassword("");
                  setNewPassword("");
                  setConfromNewPassword("");
                });
              }
         }
            else
            {
                setOutput("New & Comfrom New  Password Mismatch");
               setNewPassword(" ");
               setConfromNewPassword(" ");

            }
        }).catch((error)=>{
           setOutput("Invlaid Old Password");
           setOldPassword("")
        });

        }

    return(
        <>  
      {/* About Start */}
      <br/><br/><br/>
      <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        

                        <h1 style={{ color: "#15b9d9" }}>Change Password Here !</h1>
              <font color="green">{output}</font>

              <div class="d-flex align-items-center justify-content-center">
                <form>
                 

                  <div class="mb-3 form-control-sm">
                    <label class="opass">Old password</label>
                    <input
                      type="password"
                      class="form-control"
                      value={opass}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder=" Old Password"
                    />
                  </div>
                 

                  <div class="mb-3 form-control-sm">
                    <label class="npass">New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      value={npass}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder=" New Password"
                    />
                  </div>

                  
                  <div class="mb-3 form-control-sm">
                    <label class="cnpass">Confrom New Password</label>
                    <input
                      type="password"
                      class="form-control"
                      value={cnpass}
                      onChange={(e) => setConfromNewPassword(e.target.value)}
                      placeholder="  Confrom New Password"
                    />
                  </div>


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

        <br/><br/><br/><br/><br/><br/><br/>
        
          


        </>
    );

}
export default CPAdmin;