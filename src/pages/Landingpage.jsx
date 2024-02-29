import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  const navigate = useNavigate()
  const handleNavigate = ()=>{
    //navigate to home page
    navigate('/home')
  }


  return (
    <>
    <div className='container mt-5'>
      <div className='header row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-danger'>Media-Player</span></h3>
          <p style={{textAlign:'justify'}}>Media playerr app will allow you to add and remove their uploded videos also helps to arrange them in different cateogries by providing drag and drop functionalaties</p>
          <button onClick={handleNavigate} className='btn btn-info'>Get started</button>
        </div>
      <div className='col-lg-1'></div>
      <div className='col-lg-6'>
        <img src="https://i.pinimg.com/originals/8a/12/39/8a12395367c7aac836d278577cf29ef0.gif" alt="Landing page" />
      </div>
      </div>
      <div className='features'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
          <Card style={{height:'430px',width:'23rem'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/c5/52/8e/c5528e6c4bb0a0ed0b7a3fcf127c68a2.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{height:'430px',width:'23rem'}}>
      <Card.Img variant="top" src="https://outline-prod.imgix.net/20170920-LXxspT19tl8IsyPYyC7y?s=545b18a79ce7cfc10c9748b188993857" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className='col-lg-4'>
          <Card style={{height:'430px',width:'23rem'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

        </div>
      </div>
      <div className='video row  border p-5 mt-5 rounded mb-5 align-items-center'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast and Poweful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae maxime error vel molestiae non blanditiis, eligendi laboriosam nesciunt distinctio deserunt qui asperiores ad in. Veritatis at deserunt iusto quisquam excepturi!</p>
        <h3 className='text-warning'>Simple,fast & powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam mollitia cum ipsa illum esse corporis earum ea nihil explicabo, hic reiciendis eligendi dicta. Dicta accusantium voluptatem obcaecati. Et, similique.</p>
        <h3 className='text-warning'>Simple,fast & powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quia, voluptas rem mollitia numquam pariatur minima vero ducimus, accusamus odio maiores molestiae commodi deserunt aut provident inventore animi?</p>
      </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="914" height="514" src="https://www.youtube.com/embed/exkxqIF3-3M" title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        </div>
      </div>
    <hr />    
    </>
  )
}

export default Landingpage