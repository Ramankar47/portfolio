import { Col, Container, Row } from 'react-bootstrap'
import watchitImg from '../assets/img/watchit.png'
import projImg from '../assets/img/project-img3.png'
import ProjectCard from './ProjectCard'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import colorSharp2 from '../assets/img/color-sharp2.png'

function Projects() {
  const projects = [
    {
      title: 'UI/UX',
      description: 'In-game User Interface',
      imgUrl: watchitImg,
    },
    {
      title: 'Environment',
      description: 'Environment art on unreal engine',
      imgUrl: watchitImg,
    },
    {
      title: 'Modelling',
      description: 'Basic props modelling',
      imgUrl: watchitImg,
    },
    {
      title: 'project 4',
      description: 'Web Development',
      imgUrl: watchitImg,
    },
    {
      title: 'project 5',
      description: 'Web Development',
      imgUrl: watchitImg,
    },
    {
      title: 'project 6',
      description: 'Web Development',
      imgUrl: watchitImg,
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Projects I made here are part of ongoing learning process , some of which I designed on my own and some are part of my Internships and Trainings.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}

export default Projects
