//services
import React from "react";

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const Services = () => {
 const location=useLocation(); 
 
  return (
    <>
    {location?.pathname!="/" &&   <NavBar/>}
    <div  className="row py-5 bg services">
      <div className="text-center ">
      <div className="tagline ">Our Services </div>
      <h2 className="section-title">Our Main Focus</h2>
    </div>
      <div className="col-sm-10 card1 mx-auto">
        <div className="row py-3">
          <div className="col-sm-4">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/img/home.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Buy a home</b></h3>
              <p className="text-center featuredp">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <p className="text-center themetext2 py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/img/22.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Rent a home</b></h3>
              <p className="text-center featuredp">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <p className="text-center themetext2 py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
          <div className="col-sm-4 ">
            <div className="card mx-auto shadow-lg p-4 border border-0">
              <img src="/img/23.png" className="img-fluid w-50 mx-auto"/>
              <h3 className="text-center py-2"><b>Sell a home</b></h3>
              <p className="text-center featuredp">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <p className="text-center themetext2 py-3"><span className=" bg-light rounded-2 p-2">Find A Home &rarr;</span></p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services;
