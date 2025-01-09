import React from 'react'
import './circlesAnim.css'
import res1 from '../../img/circles-anim-1.svg'
import res2 from '../../img/circles-anim-2.svg'
import res3 from '../../img/circles-anim-3.svg'

const CirclesAnim = ({animate}) => {

  return (
    <div className='circle-an-container'>
        <div className='circle-an'>
            <span className={`circle-1 ${animate ? "animate-c1" : ""}`}>
                <div className={`internal-circle ${animate ? "animete-internal-circle" : ""}`}>
                    <img src={res1} alt="" />
                    <p className='font-resources'>Commodity and Hedging</p>
                </div>
            </span>

            <span className={`circle-2 ${animate ? "animate-c2" : ""}`}>
                <div className={`internal-circle ${animate ? "animete-internal-circle" : ""}`}>
                    <img src={res2} alt="" />
                    <p className='font-resources'>Precision</p>
                </div>
            </span>

            <span className={`circle-3 ${animate ? "animate-c3" : ""}`}>
                <div className={`internal-circle ${animate ? "animete-internal-circle" : ""}`}>
                    <img src={res3} alt="" />
                    <p className='font-resources'>Protection</p>
                </div>
                
                
            </span>

            <span className={`mini-circle ${animate ? "animate-minic" : ""}`}></span>

            <span className={`vert-line ${animate ? "animate-vline" : ""}`}>
            </span>
            <span className={`horz-line ${animate ? "animate-hline" : ""}`}>
            </span>
            <p className={`text-futura ${animate ? "animate-textfutura" : ""}`}>
               Futura Capital 
            </p>
        </div>
    </div>
  )
}

export default CirclesAnim
