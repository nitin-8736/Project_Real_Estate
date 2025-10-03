import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from "react-router-dom";

import { TbChartAreaFilled } from "react-icons/tb";
import NavBar from './NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IoLocationSharp } from "react-icons/io5";
const Property = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
    if (response?.data?.code == 200) {
      setListData(response?.data?.data)
    }

  }

  const location = useLocation();
  const navigate = useNavigate();
  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (!userData?._id) {
      navigate('/login')
      return
    }
    const response = await axios.post('http://localhost:9000/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'success'
      })
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'error'
      })
    }
  }
  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className='row property py-5'>
        <div className="text-center ">
          <div className="tagline ">Properties </div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row py-3 px-3 '>
            {listData?.map((item, index) => {
              return (<>
                <div className='col-sm-3  px-3 mb-4'>
                  <div className="card  mx-auto shadow-lg border border-0 proplist">
                    <img src={`http://localhost:9000/img/${item?.pic}`} className="card-img-top img-fluid featuredimg" alt="..." />
                    <div className="card-body">
                      <p className='mycolor1'><b>Rs. {item?.price}</b></p>
                      <h5 className="card-title"><b className='mycolor2'>{item?.title}</b></h5>
                      <p className="card-text featuredp ">{item?.description}</p><hr />
                      <div className='row featureddiv featuredp px-auto'>

                        <p ><TbChartAreaFilled />&nbsp;&nbsp;&nbsp;{item?.area}</p>
                        <span><IoLocationSharp />&nbsp;&nbsp;&nbsp;{item?.location}</span>

                        
                      </div>
                    </div>
                    <button onClick={() => handleBuy(item?._id)} className='btn btn-outline-danger m-3'>Buy</button>
                  </div>
                </div>
              </>)
            })}
            {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>
  )
}

export default Property



