import './Addsubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl,_subcategoryapiurl } from '../../Api.url';

function Addsubcategory()
{
  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [SubCatName , setSubCatName] = useState();
  const [output , setOutput] = useState();

  const [cDetails ,setCategoryDetails]=useState([]);
  useEffect(()=>{
      axios.get(_categoryapiurl+"fetch").then((response)=>{
        setCategoryDetails(response.data);  
      }).catch((error)=>{
        console.log(error);   
      });
    }); 


  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', SubCatName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput(" Sub Category Add Success");
    });
  }


    return(
        <>
      {/* About Start */}
       
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{"max-width": "900px"}}>
                <h1 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Addsubcategory</h1>
                   
            </div>
        </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4" style={{ color: "#15b9d9" }}>
                Add  Sub Addcategory Here !
              </h1>
              <font style={{ color: "blue" }}>{output}</font>
              <form>

              <div class="form-group">
                  <label for="catnm">Category Name</label>
                  <select
                    class="form-control"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  >
                    <option>Select Category</option>

                    {
                        cDetails.map((row)=>(
                            <option>{row.catnm}</option>
                              
                               
                        ))
                    }
                  </select>
                </div>
                <br/>




                <div class="form-group">
                  <label for="subcatnm"> Sub Category Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={SubCatName}
                    onChange={(e) => setSubCatName(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <label for="file"> Sub Category Icon</label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <br/>
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="btn btn-success"
                >
                  Sub Add Category
                </button>
                <br />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      
     
     
      
        </>
    );

}
export default Addsubcategory;