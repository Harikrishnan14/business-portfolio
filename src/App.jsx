import Nav from './components/Nav'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all'

function App() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".img-container", {
      xPercent: 100,
      duration: 2
    });

    gsap.utils.toArray(".img-container img").forEach((img, index) => {
      gsap.fromTo(img, {
        scaleY: 1 * index + 1,
        translateY: 0
      }, {
        scaleY: 1,
        translateY: (index + 1) % 2 === 0 ? 15 * index + 1 : 0,
        duration: 1.5
      })
    });

    gsap.from(".text-content", {
      opacity: 0,
      y: 300,
      duration: 2,
      ScrollTrigger: {
        trigger: ".text-content >*",
      },
    })

    gsap.from(".swiper-container-wrapper", {
      xPercent: 100,
      ease: "power3.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".swiper-container-wrapper"
      }
    })

    gsap.from(".bg-text", {
      y: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".bg-text"
      }
    })

    gsap.from(".article", {
      opacity: 0,
      y: 100,
      stagger: {
        amount: 2
      },
      duration: 2,
      scrollTrigger: {
        trigger: ".article"
      }
    })

    gsap.from(".box", {
      opacity: 0,
      stagger: {
        amount: 1
      },
      scrollTrigger: {
        trigger: ".box"
      }
    })
  });

  return (
    <>
      <Nav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />

      <footer className='p-20 flex items-center justify-around'>
        <div className='font-bold text-2xl'>Binhoff.co</div>
        <ul className='menu'>
          <li>Product</li>
          <li>Install</li>
          <li>Quick start</li>
        </ul>
        <ul className='menu'>
          <li>Blog</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className='flex items-center gap-4'>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <AiFillInstagram />
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
