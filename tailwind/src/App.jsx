import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="text-justify ">
      <h1 className="text-center font-serif text-4xl mb-3">Apple</h1>
        <p className="text-pink-950 font-serif">Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$391.04 billion in FY 2024. </p>
    </div>
    <div className='mt-4 bg-rose-100 w-1/3 m-auto rounded-md shadow-lg shadow-rose-950 font-serif'>
          <h2 className='ms-4  mt-24 text-2xl font-serif pt-2.5'>Here are some of the major features of the iPhone 16:</h2>
          <ul className="list-disc ms-6 mt-4 pb-6 ">
           <li>Apple A18 Chip – More powerful and efficient than its predecessors.</li>
           <li>USB-C Port – Transition from Lightning port for faster data transfer and charging.</li>
           <li>Dynamic Island – Expanded across all models for enhanced notifications and interactions.</li>
           <li>Periscope Telephoto Lens – Improved zoom capabilities with up to 10x optical zoom.</li>
           <li>Improved Display – Higher refresh rates (120Hz or more) and better color accuracy.</li>
           <li>Titanium Frame – Lighter and more durable than stainless steel.</li>
           <li>Advanced AI Features – Enhanced computational photography and machine learning capabilities.</li>
           <li>Enhanced Battery Life – Improved battery performance with more efficient hardware and software.</li>
           <li>Under-Display Face ID – Face ID sensors embedded directly under the display for a more seamless design.</li>
           <li>Wi-Fi 6E & 5G Improvements – Faster wireless speeds and improved connectivity.</li>
           <li>Enhanced ProMotion – Smoother animations and responsiveness on Pro models.   </li>
           <li>iOS 18 – New software features with improved multitasking, customization, and privacy options.</li>
          </ul>

    </div>

    </>
  )
}

export default App
