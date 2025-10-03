import React from 'react'
import { FaHome } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Slider = () => {
  return (
    <>
      <div className="row bg py-5" style={{ minHeight: "400px" }}>
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              
              <p className="ptext"> 
                Real Estate Agency
              </p>
              <b className="typewriter">

                <Typewriter
                  options={{
                    strings: ['Find Your Dream Home...'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className='mt-2'>
                Turning Dreams into Doors — Your Trusted Pathway to <br />Premium Homes and Profitable Investments!
              </p>
              <button className="btn btn1 btnquery">Make An Enquiry</button>
            </div>

            {/* Image Content */}
            <div className="col-sm-6  text-center">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
