import './index.scss';
import LogoP from '../../../assets/images/logo-p.png';
import { useRef } from 'react';
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { useEffect } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef()
    
    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity:1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      })

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      )

    },[])

    return(
        <div className="logo-container" ref = {bgRef}>
            <img ref = {solidLogoRef} className = 'solid-logo' src={LogoP} alt="Logo" />
            <svg 
  width="559pt"
  height="897pt"
  version="1.0"
  viewBox="0 0 559 1000"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    className="svg-container"
    transform="translate(0 457) scale(.1 -.1)"
    fill="none"
  >
    <path
      ref={outlineLogoRef}
      d="M 1200 4200 C 800 4200 300 3950 300 3550 L 300 -3700 C 300 -4100 550 -4400 950 -4400 S 2100 -4400 2100 -3700 L 2100 -1100 L 3500 -1100 C 4800 -1100 5800 -300 5812 1197 C 5800 3300 4700 4200 3500 4200 Z M 2100 200 L 3300 200 C 4100 200 4500 700 4500 1600 C 4500 2500 4000 3000 3300 3000 L 2100 3000 Z"
    />
  </g>
</svg>
</div>
    )

}

export default Logo;