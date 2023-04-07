import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

import  NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner'

function App() {
  return (
    <section className="App">
      <NavBar/>
      <Banner/>
    </section>
  )
}

export default App
