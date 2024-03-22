import React, { useEffect, useRef } from 'react'
import './Intro.scss';
import { init } from 'ityped';

// import Man from '../assets/man.png';
import Man1 from '../assets/man1.png';
import Down from '../assets/down.png';


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
        strings: ["Front-End", "UI/UX Design", "Content Creator"],
      });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src={Man1} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>developer-rak</h1>
          <h3>
          Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={Down} alt="" />
        </a>
      </div>
    </div>
  )
}
