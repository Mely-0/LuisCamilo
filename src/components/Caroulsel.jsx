import image3 from '../components/img/js2.png'
import image from '../components/img/html2.png'
import image2 from '../components/img/css2.png'
import image6 from '../components/img/node-js.png'
import image5 from '../components/img/php.png'
import image4 from '../components/img/react2.png'
import image7 from '../components/img/python.png'

function Carousel () {
  return(
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div>
  <div id='cont-habi' className="carousel-inner">
    <div id='habi1' className="carousel-item active" >
      <p>JAVA SCRIPT</p>
      <img src={image3} className="d-block w-100" alt="..." id='js'/>
    </div>
    {/* <div id='habi2' className="carousel-item">
      <p>PHP</p>
      <img src={image5} className="d-block w-100" alt="..." id='css'/>
    </div> */}
    <div id='habi3' className="carousel-item">
      <p>HTML</p>
      <img src={image} className="d-block w-100" alt="..." id='html'/>
    </div>

    <div id='habi4' className="carousel-item">
      <p>REACT</p>
      <img src={image4} className="d-block w-100" alt="..." id='html'/>
      </div>
      <div id='habi5' className="carousel-item">
      <p>NODE JS</p>
      <img src={image6} className="d-block w-100" alt="..." id='html'/>
    </div> 
    <div id='habi6' className="carousel-item">
      <p>CSS</p>
      <img src={image2} className="d-block w-100" alt="..." id='html'/>
    </div>
    <div id='habi7' className="carousel-item">
      <p>PYTHON</p>
      <img src={image7} className="d-block w-100" alt="..." id='html'/>
    </div>
  </div>
  <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" id='click'></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" id='click'></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel