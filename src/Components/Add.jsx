import React, { useState } from 'react'
import {Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI'

function Add({setUploadVideoResponse}) {

  const handleUpload = async ()=>{
const {caption,imageURL,youtubeLink} = uploadVideo
    if(caption && imageURL && youtubeLink){
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
        if(result.status>=200 && result.status<300){
          alert(`video'${result.data.caption}'uploaded successfully`)
          setUploadVideoResponse(result.data)
          handleClose()
        }else{
          alert("API Call Failed...Please Try after SomeTime!!")
        }
    }else{
   alert('please fill the form completely!!')
  }
}

  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })

    const [show, setShow] = useState(false);

    const handleClose = () =>{
      setShow(false);
      setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }
    const handleShow = () => setShow(true);

      console.log(uploadVideo);

      const getyoutubeEmbededLink = (link)=>{
        if(link.includes("v=")){
          let videoId = link.split("v=")[1].slice(0,11)
          setUploadVideo({...uploadVideo,youtubeLink:` https://www.youtube.com/embed/${videoId}`})
        }else{
          setUploadVideo({...uploadVideo,youtubeLink:""})
          alert("Input proper youtube link!!")
        }
      }

  return (
    <>
        <div className="d-flex">
            <h5>upload video</h5>
            <button  onClick={handleShow} className='btn bg-danger ms-2 '>
                <i className="fa-solid fa-plus"></i></button>
        </div>
                                                {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                   {/* form */}
            <p>please fill the following details....</p>
            
        <FloatingLabel
        controlId="floatingInputCaption"
        label="video caption"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.caption}  onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Videocaption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImg"
        label="image url"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.imageURL}  onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="imageURL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="ytube video link"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getyoutubeEmbededLink(e.target.value)} type="text" placeholder="youtube video link" />
      </FloatingLabel>
      

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add