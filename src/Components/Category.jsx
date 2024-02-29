import React,{useEffect, useState} from 'react'
import { Modal,Button, FloatingLabel, FormControl } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';


function Category({removeCategoryVideoResponse}) {


      const [AllCategories,SetAllCategories] = useState([])

    const [CategoryName,setCategoryName] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () =>{
     setShow(false);
     setCategoryName("")
    }
    const handleShow = () => setShow(true);
    const handleAddCategory = async ()=>{
      if(CategoryName){
        const result = await addCategoryAPI({CategoryName,allVideos:[]})
      handleClose()
      getAllCategories()
      }else{
        alert("Please Fill The Form Completely")
      }
    }
    
    const getAllCategories = async()=>{
      const result = await getCategoryAPI()
      SetAllCategories(result.data)
    }
    // console.log(AllCategories);
    useEffect(()=>{
      getAllCategories()
    },[removeCategoryVideoResponse])

      const handleRemoveCategory = async (cId)=>{
        await removeCategoryAPI(cId)
        getAllCategories()
      }

      const dragOverCategory = (e)=>{
        e.preventDefault()
        console.log("Dragging Over Category");
      }

      const videoDropped =  async (e,categoryId)=>{
        const videoId = e.dataTransfer.getData("videoId")
        console.log(`video Dropped with vId: ${videoId},inside category Id: ${categoryId}`);
        // to get details of videoId
        const {data} = await getAVideoAPI(videoId)
        console.log(data);


      // to get category details where we can store videos

      let selectedCategory = AllCategories.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      getAllCategories()

      }

      const videoDragStarted = (e,videoId,categoryId)=>{
        console.log(`Drag Started from category Id:${categoryId} with video Id: ${videoId}`);
        let dataShare = {videoId,categoryId}
        e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
      }

  return ( 
    <>
    <div className='d-flex justify-content-around'>
      <h3>All Categories</h3>
    <button onClick={handleShow} style={{width:'60px',height:'60px'}} className='btn btn-info rounded-circle fs-5'>+</button>
    </div>


    <div className='container-fluid mt-3'>
      { AllCategories.length>0? AllCategories.map((item,index)=>(
      <div draoppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className='border rounded p-3 mb-2'>
       <div className='d-flex justify-content-between'>
        <h5>{item.CategoryName}</h5>
        <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </div>


      <div className='row mt-2'>
          {
            item.allVideos?.length>0 &&
            item.allVideos?.map((video,index)=>(
              <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
                <Videocard insideCategory={true} displayData={video}/>
              </div>
            ))
          }
      </div>
          
      </div>
      ))
    : 
    <div className='text-danger fw-bolder'>
      No Categories Are Added Yet
    </div>
    }
    </div>

    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Cateogary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill the Following Details</p>
            <div className='border rounded border-secondary p-3'>
              <FloatingLabel controlId='floatingInputCaption' label='cateogary name' className='mb-3'>
                <FormControl value={CategoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder='Cateogary Name'/>
              </FloatingLabel>
            </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category