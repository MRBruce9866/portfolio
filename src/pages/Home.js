import React, { Component } from 'react'
import ProjectCard from '../components/ProjectCard'
import Container from '../components/Container'
import { Fade } from 'react-reveal'

export class Home extends Component {
  state = {
    projects: [
      {
        name: 'GymSense',
        contributors: ['Markus Bruce', 'Aaron Booth', 'Jarvis Maness', 'Louis Rollins'],
        desc:
          'GymSense is a web application designed to help guide newcomers into the world of fitness by allowing users to create / generate workout routines.',
        url: 'https://guarded-peak-76174.herokuapp.com/',
        gitHub: 'https://github.com/MRBruce9866/Project3'
      },
      {
        name: 'CityScope',
        contributors: ['Markus Bruce', 'William Sherrill', 'Steven Balerna', 'Louis Rollins'],
        desc:
          'CityScope is designed to provide the user with general living statistics for the major cities in the U.S. It will also provide a few recreational activies in the area.',
        url: 'https://stevenbalerna.github.io/project1/',
        gitHub: 'https://github.com/MRBruce9866/project1'
      },
      {
        name: 'Fallout Guessing Game',
        contributors: ['Markus Bruce'],
        desc:
          'Fallout Guessing Game was one of the first project I did within the coding bootcamp at UNCC. It is a hangman game in the style of the popular Fallout game series by Bethesda Studios.',
        url: 'https://mrbruce9866.github.io/Word-Guess-Game/',
        gitHub: 'https://github.com/MRBruce9866/Word-Guess-Game'
      },
      {
        name: 'Simon',
        contributors: ['Markus Bruce'],
        desc:
          'Simon is my representation of the memory game of Simon by Hasbro Gaming. The computer creates a series of tones and lights and the user must repeat the sequence to continue. ',
        url: 'https://mrb-simon.herokuapp.com/',
        gitHub: 'https://github.com/MRBruce9866/simon'
      }
    ]
  }

  render () {
    return (
      <>
        <Container id='about' className='container info'>
          <Fade>
            <h1 className='text-center mainHeading my-5'>About</h1>
          </Fade>

          <p className='about-me'>
            <img className='profilePic' alt='Profile' src={require('../assets/images/profilePicture.png')} />
            My name is Markus Bruce and I'm 30 years old. I have been married for nearly 6 years to my highschool
            sweetheart, Casey, and together we have an awesome 5 year old daughter, Alexis. My family means the world to
            me and they are my primary motivation to try to improve myself, which is why I am taking this coding
            bootcamp. When I am not playing with my daughter or spending time with my wife, I like to play video games,
            watch youtube videos, and of course, program. My life goals are to provide for my family, to live a
            comfortable, modest lifestyle, and watch my daughter grow up and start her own family, 30 years from now. I
            want to accomplish this by securing a job in something I love and enjoy such as programming.
          </p>
          <p className='about-me'>
            I have had an interest in computers and technology since I was a child. I remember my first expierence with
            a computer was with a Windows 95 machine that my uncle Emory had. My brothers and I would take turns playing
            Solitare and Minesweeper, as well as painting on MS Paint. We soon were able to talk my father in to buying
            one for our home and I would play on it as often as I was allowed. In highschool, I began to learn to
            program on my own in BASIC using Just Basic/Liberty BASIC and really enjoyed the immediate feedback of
            coding a short program. Soon after, I tried my hand at learning Java through various online tutorials and I
            was hooked.
          </p>

          <h1 className='mainHeading text-center mt-5'>Skills</h1>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <ul className='skills'>
                <li>
                  <h4>JavaScript</h4>
                </li>
                <li>
                  <h4>Java</h4>
                </li>
                <li>
                  <h4>HTML</h4>
                </li>
                <li>
                  <h4>Cascading Style Sheets (CSS)</h4>
                </li>
                <li>
                  <h4>Git</h4>
                </li>
                <li>
                  <h4>React.js</h4>
                </li>
                <li>
                  <h4>Node.js</h4>
                </li>
                <li>
                  <h4>REST</h4>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <ul className='skills'>
                <li>
                  <h4>MongoDB</h4>
                </li>
                <li>
                  <h4>MERN Stack</h4>
                </li>
                <li>
                  <h4>Sequelize.js</h4>
                </li>
                <li>
                  <h4>jQuery</h4>
                </li>
                <li>
                  <h4>C#</h4>
                </li>
                <li>
                  <h4>Bootstrap</h4>
                </li>
                <li>
                  <h4>SQL</h4>
                </li>
                <li>
                  <h4>NoSQL</h4>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <Container id='projects' className='container projects'>
          <Fade>
            <h1 className='text-center mainHeading my-3'>Projects</h1>
          </Fade>

          <div className='row'>
            {this.state.projects
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((project, index) => {
                return (
                  <div key={project.name} className='col-12 my-5'>
                    <Fade up>
                      <ProjectCard
                        title={project.name}
                        contributors={project.contributors}
                        desc={project.desc}
                        url={project.url}
                        gitHub={project.gitHub}
                      />
                    </Fade>
                  </div>
                )
              })}
          </div>
        </Container>
        <Container id='contact' className='container contact text-center my-5'>
          <Fade>
            <h1 className='text-center mainHeading my-5'>Contact</h1>
          </Fade>
          <h3 className='subHeading mt-5'>Email</h3>
          <h5>mrbruce9866@gmail.com</h5>
          <h3 className='subHeading mt-5'>Phone</h3>
          <h5>(704) 929-7871</h5>
          <h3 className='subHeading mt-5'>LinkedIn</h3>
          <a href='https://www.linkedin.com/in/markus-bruce-25b387184/'>
            <h5>https://www.linkedin.com/in/markus-bruce-25b387184/</h5>
          </a>
          <h3 className='subHeading mt-5'>GitHub</h3>
          <a href='https://github.com/MRBruce9866'>
            <h5>https://github.com/MRBruce9866</h5>
          </a>
        </Container>
      </>
    )
  }
}

export default Home
