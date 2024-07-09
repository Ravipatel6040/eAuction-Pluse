import "./Viewproduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _productapiurl } from "../../Api.url";
import { Link, useParams } from "react-router-dom";

function Viewproduct() {
  const params = useParams();
  const [pDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios
      .get(_productapiurl + "fetch?subcatnm=" + params.subcatnm)
      .then((response) => {
        const fetchProductDetails = response.data;
        var p = fetchProductDetails.map((product) => {
          const initialtime = new Date(product.info);
          const timediffrence = (new Date() - initialtime) / (1000 * 60 * 60);
          return {
            ...product,
            timediffrence: timediffrence,
          };
        });
        setProductDetails(p);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <br />
      <br />
      {/* About Start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4" style={{ color: "#15b9d9" }}>
                View Product List - {params.subcatnm}
              </h1>
              <hr />
              {pDetails.map((row) => (
                <div class="container mt-3">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src={`../assets/uploads/picons/${row.piconnm}`}
                        class="img-fluid"
                        alt="Product Image"
                      />
                    </div>
                    <div class="col-md-8">
                      <h4 class="mb-3">
                        <strong>Title - {row.title}</strong>
                      </h4>
                      <p>
                        <strong>Description - {row.description}</strong>
                      </p>
                      <p>
                        <strong>Base Price - {row.baseprice}</strong>
                      </p>
                      <Link to={`/bidp/${row._id}`}>
                      {row.timediffrence > 48 ? (
                        <button class="btn btn-secondary" disabled>
                          Bid Closed
                        </button>
                      ) : (
                        <button id="bid" class="btn btn-primary">
                          Bid Now
                        </button>
                        
                      )}
                      </Link>
                    </div>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* About End */}
    </>
  );
}

export default Viewproduct;
