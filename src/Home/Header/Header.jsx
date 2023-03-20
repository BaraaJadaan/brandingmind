import './_nav.scss'
import './_hero.scss'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef, useEffect } from "react";
import logo from '../../assets/header-logo.png'
import moto from '../../assets/moto.png'
import statue from '../../assets/statue.png'
import statueOutline from '../../assets/statue-outline.png'
import statueOlive from '../../assets/statue-olive.png'
import hand from '../../assets/hand.png'
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const image = useRef(null);
    useEffect(() => { 
      const el = image.current;
      gsap.to(".parallax", {
        scrollTrigger: {
          scrub: 2
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
      });

      // create a timeline with a parallax effect
      const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_hero_hand",
        start: "top bottom",
        end: "50% top",
        scrub: 2,
        },
        // y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        // ease: "none"
      });
      tl.to(el, {
        x:-500,
        y: 300,
        duration: 2
      });

      
    }, [])
    
  return (
    <div>
      <header >
      <nav className='bar'>
        <div>
          <ul className='bar_navigation white'>
            <li>Home</li>
            <li>About</li>
            <li>Approach</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <img className='bar_logo' src={logo} alt="logo" />
        </div>

        <div className='btn'>
          <a href="">
            <button className='bar_btn'>
              Get in touch 
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" style={{marginLeft:7}} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </a>
        </div>
      </nav>
      </header>

      <section className='hero'>
        <div>
          <img className='hero_moto1' src={moto} alt={moto} />
        </div>
        <div className='hero_statue'>
          <img data-speed=".3" className='hero_statue--head parallax' src={statue} alt={statue} />
          <img data-speed=".1" className='hero_statue--outline parallax' src={statueOutline} alt={statueOutline} />
          <img data-speed=".2" className='hero_statue--olive parallax' src={statueOlive} alt={statueOlive} />
        </div>
        
        <div className='section_hero_hand'>
          <img ref={image} className='hero_hand' src={hand} alt={hand} />
        </div>

        <div style={{position: "relative"}} className='disc'>
          <h1 className='hero_moto2 white stop_hand'>Brands built<br/>to <span className='hero_moto2--glow'>glow</span></h1>

          <p  className='hero_par white'>We are a branding agency that operates as a subdivision of Dow Group. Our team of experienced branding experts is dedicated to helping businesses build strong and memorable brands that stand out in a crowded marketplace. We believe that branding is more than just creating a logo or tagline - it's about developing a unique identity that captures the essence of a business and communicates it to the world.</p>
          <a className='hero_more white' href=""><p><br /><br />READ MORE</p></a>
        </div>
      </section>
    </div>
  )
}

export default Header