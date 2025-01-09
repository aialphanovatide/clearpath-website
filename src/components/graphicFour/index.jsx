import React from 'react'
import './graphicFour.css'
import circle1 from '../../img/circle-graphic-four-1.svg'
import circle2 from '../../img/circle-graphic-four-2.svg'
import circle3 from '../../img/circle-graphic-four-3.svg'

import res1 from '../../img/gf-res-1.svg'
import res2 from '../../img/gf-res-2.svg'
import res3 from '../../img/gf-res-3.svg'

const GraphicFour = ({animate}) => {


  return (
    <div className='graphic-four-container'>
        <div className='graphic-four'>
            <img src={circle1} className={`gf-circle-1 ${animate ? "circles-animation" : ""}`} alt="" />
            <img src={circle2} className={`gf-circle-2 ${animate ? "circles-animation" : ""}`} alt="" />
            <img src={circle3} className={`gf-circle-3 ${animate ? "circles-animation" : ""}`} alt="" />

            <span className={`minicircle-1 ${animate ? "minicircle-animation" : ""}`}></span>
            <span className={`minicircle-2 ${animate ? "minicircle-animation" : ""}`}></span>
            <span className={`vertical-line-1 ${animate ? "line-animation" : ""}`}></span>
            <span className={`vertical-line-2 ${animate ? "line-animation" : ""}`}></span>
            <div className={`gf-div gf-div-1 ${animate ? "div-animation" : ""}`}>
                <img src={res1} alt="" />
                <p className='font-resources gf-align'>Customized Protection Strategies</p>
            </div>
            <div className={`gf-div gf-div-2 ${animate ? "div-animation" : ""}`}>
                <img src={res2} alt="" />
                <p className='font-resources gf-align'>Continuous Market Monitoring</p>
            </div>
            <div className={`gf-div gf-div-3 ${animate ? "div-animation" : ""}`}>
                <img src={res3} alt="" />
                <p className='font-resources '>Strategic Advisory</p>
            </div>

        </div>
    </div>
  )
}

export default GraphicFour