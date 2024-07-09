import './About.css';


function About()
{
    return(
        <>
        {/* About Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4" style={{ color: "#15b9d9" }}>Welcome to eAuction , About page</h1>
                        <p>The bidding process is typically conducted in real-time, enabling dynamic and competitive price adjustments. E-auctions are utilized in various sectors, including consumer goods, real estate, collectibles, and business procurement. They offer advantages such as wider reach, convenience, and transparency. </p>
                        <p class="mb-4">Participants can monitor the auction's progress, place bids, and receive updates electronically, making the process efficient and accessible.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}


        <div class="container-fluid about bg-light py-5">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="about-img pb-5 ps-5">
                            <img src="assets/img/img.avif" class="img-fluid rounded w-100" style={{"object-fit": "cover"}} alt="Image"/>
                            <div class="about-img-inner">
                                <img src="assets/img/img2.avif" class="img-fluid rounded-circle w-100 h-100" alt="Image"/>
                            </div>
                            {/* <div class="about-experience">15 years experience</div> */}
                        </div>
                    </div>
                    <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                        <div class="section-title text-start mb-5">
                            <h4 class="sub-title pe-3 mb-0">About Us</h4>
                            <h1 class="display-3 mb-4">
                            The auction thought, "Eight words suffice for brevity."</h1>
                            <p class="mb-4">An e-auction, or electronic auction, is an online platform where goods and services are sold to the highest bidder. Unlike traditional auctions held in physical locations, e-auctions take place over the internet, allowing participants to place bids from anywhere in the world.!</p>
                            <div class="mb-4">
                                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> Refresing to get such a personal touch.</p>
                                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> Duis aute irure dolor in reprehenderit in voluptate.</p>
                                <p class="text-secondary"><i class="fa fa-check text-primary me-2"></i> Velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            
                            <a href="#" class="btn btn-primary rounded-pill text-white py-3 px-5">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

       
       


        </>
    );

}
export default About;