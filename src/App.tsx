import './css/App.css'

import  NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner'
import { CarouselComponent } from './components/Carousel/Carousel'
import { Contact } from './components/Form/Form';

function App() {
  return (
    <section className="App">
      <NavBar/>
      <Banner/>
      <CarouselComponent/>
      <Contact/>
    </section>
  )
}

export default App
