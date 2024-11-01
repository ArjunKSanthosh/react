import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
    <div className="nav">
      <div className="left">
        <h3>Novavi</h3>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Help</li>
          <li>Guide</li>
        </ul>
      </div>
    </div>
    <div className="container">
      <p>We are Novavi Pvt Ltd, a venture of two visionary brothers designed to up bring the startups in India. Our journey towards becoming the ultimate partner of newbie businesses started in 2023 with a spectrum of digital services encompassing Web Development, Software Development, and Digital Marketing services in kochi. Novavi stands for the realisation of the ambitions of growing startups.

With a vision to become the go-to choice of Indian startups, we strive to provide innovative and affordable digital marketing services in kochi and also across different online channels. With comprehensive research, we analyse the complexities and challenges of your business in-depth and guide with unique and cost-effective yet superior ideas that make you stand out from the crowd. At Novavi, we are in charge of the growth of your business. Through unwavering dedication for excellence and innovative ideas, Our expertise spans a wide spectrum of services, including web development, software development, digital marketing, SEO, and SMM. We help you to flourish in this digital world. Join us today and make your growing business an epitome of success. The ultimate digital marketing solution ready in your hands for the better days of your brands </p>
    </div>
    </>
  )
}

export default App
