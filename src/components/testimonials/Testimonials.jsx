import React from 'react'
import './Testimonials.scss';

import RightArrow from '../assets/right-arrow.png';
import Youtube from '../assets/youtube.png';
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Kohlar",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: Twitter,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel!",
    },
    {
      id: 2,
      name: "Cox",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: Youtube,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel!",
    },
    {
      id: 1,
      name: "Martin Guptil",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: LinkedIn,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vel!",
    },
  ]

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <img className='left' src={RightArrow} alt="" />
              <img className='user' src={d.img} alt="" />
              <img className='right' src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
