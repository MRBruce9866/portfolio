import React from 'react'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg myNavbar'>
      <a className='navbar-brand' href='#'>
        Markus R. Bruce
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
