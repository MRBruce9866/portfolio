import React from 'react'
import { Slide, Bounce, Flip } from 'react-reveal'

export default function ProjectCard (props) {
  return (
    <div className='projectCard text-center my-2'>
      <div className='title'>
        <Flip>{props.title}</Flip>
      </div>
      <div className='row my-3 align-items-center'>
        <Bounce right>
          <div className='col-12 my-3'>
            <h3 className='subHeading'>Contributors</h3>
            <ul className='text-center contributors'>
              {props.contributors.sort().map((author) => {
                return (
                  <li key={author} className='mx-3'>
                    {author}
                  </li>
                )
              })}
            </ul>
          </div>
        </Bounce>
        <Slide left>
          <div className='col-12 my-3 desc'>
            <h3 className='subHeading'>Description</h3>
            <p>{props.desc}</p>
          </div>
        </Slide>
      </div>
      <div className='playButton'>
        <a href={props.url}>
          <button className='btn myButton'>View</button>
        </a>
      </div>
      <div className='gitButton'>
        <a href={props.gitHub}>
          <button className='btn myButton'>GitHub</button>
        </a>
      </div>
    </div>
  )
}
