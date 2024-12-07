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
        <p className="text-pink-950 font-serif w-4/5 m-auto text-lg">Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$391.04 billion in FY 2024. </p>
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
    <div className="bg-fixed bg-center w-2/5 h-4/5 bg-no-repeat m-auto mt-24 shadow-lg shadow-rose-950 mb-24 p-9 rounded-lg font-serif grayscale hover:grayscale-0 delay-100 ease-in-out" style={{backgroundImage:`url(images/iphone.jpeg)`}}>
      <p>The versatile new iPhone 16 camera system captures beautiful photos — from up close or far away. The two-in-one 48MP Fusion camera lets you take stunning super-high-resolution images, or zoom in with the 2x optical-quality Telephoto. The Ultra Wide camera shoots extreme close-up macro photos or wider, more expansive pictures. Altogether, it’s like having four lenses in your pocket.
      The new Ultra Wide camera with autofocus takes incredibly sharp, detailed macro photos and videos. You can also frame more expansive scenes without taking a step back. And because it has a larger aperture and bigger pixels, it can capture up to 2.6x more light for higher image quality — even in low light.
      Powered by advanced intelligence and Spatial Audio capture, Audio Mix lets you adjust the way voices sound in your videos using three different voice options. Want to decrease background sound? Or just focus on the voices that are in frame? Simply select the mix and adjust intensity to get the sound you want after video capture.
      Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can make every photo even more you. And you can add, change or remove a style anytime you want.
      We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos. And thanks to the powerful A18 chip, you can see the change in a live preview before you apply it.
      Our improved image pipeline also enables more creative styles, which allow you to customise the different moods of a photo through colour.Personalise every style even more with the new control pad, which makes it easy to adjust tone and colour simultaneously. You can also use the slider to adjust the intensity of the specific colours, instead of applying a one-size-fits-all approach.
      Meet A18, custom-built for Apple Intelligence — and so much more. It jumps two generations ahead of the A16 Bionic chip in iPhone 15. And it powers next-level camera features like Photographic Styles and Camera Control. All with exceptional power efficiency to extend battery life.
      iPhone 16 has been designed to make room for a larger battery, which works together with A18 to deliver a big boost in battery life, even with so many new features. So you can game, binge and rock on — and on.
       Snap on a new MagSafe charger for even faster wireless charging3 — up to 25W with a 30W power adapter or higher, enabling up to 50% charge in around 30 minutes.4iPhone 16 has a sturdy, aerospace-grade aluminium enclosure and strong — and beautiful — colour-infused glass on the back. The latest-generation Ceramic Shield material is two times tougher than any smartphone glass. And a new internal design dissipates heat more effectively, so you’ll get better performance overall, especially when it comes to gaming.
       iPhone 16 has a sturdy, aerospace-grade aluminium enclosure and strong — and beautiful — colour-infused glass on the back. The latest-generation Ceramic Shield material is two times tougher than any smartphone glass. And a new internal design dissipates heat more effectively, so you’ll get better performance overall, especially when it comes to gaming.
      </p>
    </div>
    <table className="border-collapse border border-slate-400 m-auto mb-24">
  <thead>
    <tr>
      <th className="border border-slate-300 p-6 ">Phone</th>
      <th className="border border-slate-300 p-6">year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 p-6">Iphone 14</td>
      <td className="border border-slate-300 p-6">2022</td>
    </tr>
    <tr>
      <td className="border border-slate-300 p-6">Iphone 15</td>
      <td className="border border-slate-300 p-6">2023</td>
    </tr>
    <tr>
      <td className="border border-slate-300 p-6">Iphone 16</td>
      <td className="border border-slate-300 p-6">2024</td>
    </tr>
  </tbody>
</table>

    </>
  )
}

export default App
