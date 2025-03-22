import { useState, useEffect } from 'react'
import './index.css'
import Header from './component/head'
import About from './component/about'
import Skills from './component/skills'
import Projects from './component/projects'
import Contact from './component/contact'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setCount(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    console.log(count)
  }, [])

  return (
    <body>
      <Header />
      <div className=' flex flex-col mx-auto'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </body>
  )
}

export default App
