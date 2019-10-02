import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <>
      <Container className='container-full content'>
        <Navbar />
        <Router>
          <Switch>
            <Route component={Home} />
          </Switch>
        </Router>
      </Container>
      <Footer />
    </>
  )
}

export default App
