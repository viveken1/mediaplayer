import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
import Add from '../Components/Add'
import View from '../Components/View'



function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const [UploadVideoResponse,setUploadVideoResponse] = useState(" ")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/Watch'}>open history</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row text-center">
        <div className="col-lg-6">
          <h3>All videos</h3>
          <View UploadVideoResponse={UploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>
        <div className="col-lg-6">
            <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
    </>
  )
}

export default Home