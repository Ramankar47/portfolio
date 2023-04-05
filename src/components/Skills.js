import houdini from '../assets/icons/houdini.svg'
import unreal from '../assets/icons/unreal-engine.svg'
import photoshop from '../assets/icons/Photoshop.png'
import Illustrator from '../assets/icons/adobe-illustrator.svg'
import adobexd from '../assets/icons/adobe-xd.svg'
import figma from '../assets/icons/Figma.svg'
import colorSharp from '../assets/img/color-sharp.png'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                dolorum laudantium architecto ipsa aut! Inventore consectetur
                minima nobis cumque deserunt nam similique, animi earum
                provident recusandae dolore incidunt eum ad rem! Perspiciatis
                excepturi blanditiis explicabo.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={unreal} alt='Unreal Engine-logo' />
                  <h5>Unreal Engine</h5>
                </div>
                <div className='item'>
                  <img src={houdini} alt='Houdini-logo' />
                  <h5>Houdini</h5>
                </div>
                <div className='item'>
                  <img src={Illustrator} alt='Illustrator-logo' />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className='item'>
                  <img src={photoshop} alt='Photoshop-logo' />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className='item'>
                  <img src={adobexd} alt='AdobeXD-logo' />
                  <h5>Adobe XD</h5>
                </div>
                <div className='item'>
                  <img src={figma} alt='Figma-logo' />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt='colorsharp'
        className='background-image-left'
      />
    </section>
  )
}

export default Skills
