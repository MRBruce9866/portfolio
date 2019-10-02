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
        desc: '',
        url: 'https://stevenbalerna.github.io/project1/',
        gitHub: 'https://github.com/MRBruce9866/project1'
      },
      {
        name: 'Fallout Guessing Game',
        contributors: ['Markus Bruce'],
        desc: '',
        url: 'https://mrbruce9866.github.io/Word-Guess-Game/',
        gitHub: 'https://github.com/MRBruce9866/Word-Guess-Game'
      },
      {
        name: 'Simon',
        contributors: ['Markus Bruce'],
        desc: '',
        url: 'https://mrb-simon.herokuapp.com/',
        gitHub: 'https://github.com/MRBruce9866/simon'
      }
    ]
  }

  render () {
    return (
      <>
        <Container className='container info'>Test</Container>
        <Container className='container projects'>
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
      </>
    )
  }
}

export default Home
