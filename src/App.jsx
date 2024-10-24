import About from "./loveKoSiJM/About"
import Home from "./loveKoSiJM/Home"
import { ParallaxProvider } from "react-scroll-parallax"
import Projects from "./Projects"
import Contact from "./loveKoSiJM/Contact"

function App() {

  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
