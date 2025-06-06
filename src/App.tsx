import { useState, useEffect } from 'react'
import './index.css'
import Header from './component/head'
import About from './component/about'
import Skills from './component/skills'
import Projects from './component/projects'
import Contact from './component/contact'
import Dev from './component/dev'

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
    <main className='overflow-x-hidden'>
      <Header />
      <div className=' flex flex-col xl:w-330 mx-auto'>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Dev />
      </div>
    </main>
  )
}

export default App
