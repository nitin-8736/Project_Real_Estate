import React from 'react'
import NavBar from './NavBar'
const About = () => {
  return (
    <>

      {location?.pathname != "/" && <NavBar />}
      <div className="text-center bg">
        <div className="tagline mt-4">About Us</div>
        <h2 className="section-title">Experience Facilities</h2>
      
      <div className="about bg">
        <div className="row px-3 aboutRow">
          <div className="col-sm-2 px-auto imgcol">
            <img className='aboutimg' src="/img/propa.jpeg" alt="" height="120px" width="120px" />
          </div>
          <div className="col-sm-10 aboutp">
            <h3 className='themetext2'>Personalized property Matching:</h3>
            <p className='fs-4'> "Our expert team uses advanced technology and local market knowledge to match you with your dream property, tailored to your unique needs and preferences."</p>
          </div>
        </div><br />
        <div className="row px-3 aboutRow" >
          <div className="col-sm-2 px-auto imgcol">
            <img className='aboutimg' src="/img/propc.jpeg" alt="" height="120px" width="120px" />
          </div>
          <div className="col-sm-10 aboutp">
            <h3 className='themetext2'>Expert Market Insights:</h3>
            <p className='fs-4'>"Stay ahead of the curve with our in-depth market analysis and trends. Our experienced professionals provide valuable insights to help you make informed decisions."
            </p>
          </div>
        </div><br />
        <div className="row px-3 aboutRow">
          <div className="col-sm-2 px-auto imgcol">
            <img className='aboutimg' src="/img/propb.jpg" alt="" height="120px" width="120px" />
          </div>
          <div className="col-sm-10 aboutp">
            <h3 className='themetext2'>Streamlined Property Search:</h3>
            <p className='fs-4'> "Our user-friendly platform and dedicated support team ensure a seamless property search experience. Find your perfect home or investment property with ease."
            </p>
          </div>
        </div><br />
        <div className="row px-3 aboutRow">
          <div className="col-sm-2 px-auto imgcol">
            <img className='aboutimg' src="/img/propf.jpg" alt="" height="120px" width="120px" />
          </div>
          <div className="col-sm-10 aboutp">
            <h3 className='themetext2'>Comprehensive Property Services:</h3>
            <p className='fs-4'>"From property listings to transactions, we offer a full suite of services to guide you through every step of the process. Trust us to handle your real estate needs."

            </p>
          </div>
        </div><br />
        <div className="row px-3 aboutRow">
          <div className="col-sm-2 px-auto imgcol">
            <img className='aboutimg' src="/img/propd.webp" alt="" height="120px" width="120px" />
          </div>
          <div className="col-sm-10 aboutp">
            <h3 className='themetext2'>Local Knowledge and Community Focus:</h3>
            <p className='fs-4'>"As seasoned local experts, we understand the nuances of our community. Let us leverage our expertise to help you find the perfect property in the right neighborhood."
            </p>
          </div>
        </div><br />
      </div>
      </div>
    </>
  )
}

export default About
