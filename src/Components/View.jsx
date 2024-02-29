import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'



function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

      const [allVideos,setAllVideos] = useState([])

      const [deleteVideoResponse,setDeleteVideoResponse] = useState("")

    const getAllVideos = async ()=>{
      const result  = await getAllVideosAPI()
      // console.log(result);
      if(result?.status==200){
       setAllVideos(result?.data);
      }
    }
    


      useEffect(()=>{
        getAllVideos()
      },[uploadVideoResponse,deleteVideoResponse])

        // console.log(allVideos);

        const dragOverView = (e)=>{
          e.preventDefault()
        }
          const handleCategoryVideo = async (e)=>{
            const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
            console.log(`Remove Video Id : ${videoId} from category Id: ${categoryId}`);

              
            //get a single category
            const {data} = await getSingleCategoryAPI(categoryId)
            const updatedVideoList = data.allVideos.filter(item=>item.id!=videoId)
            console.log(updatedVideoList);

            const {id,CategoryName} = data
           const result =  await updateCategoryAPI(categoryId,{id,CategoryName,allVideos:updatedVideoList})
              setRemoveCategoryVideoResponse(result.data)
          }


  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        { allVideos?.length>0? allVideos?.map((video,index)=>(
        <Col key={index}  className='mb-4' sm={12} md={6} lg={4}>
            <Videocard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
        </Col>
        ))
        :
        <div className='text-danger fw-bolder '>NO videos are uploaded</div>
        }
    </Row>
    </>
  )
}

export default View