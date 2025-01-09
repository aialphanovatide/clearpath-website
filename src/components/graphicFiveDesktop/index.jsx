import React from 'react'
import './graphicFiveMobile.css'
import circle from '../../img/circle-graphic-five-1.svg'
import diamond from '../../img/diamond-graphic-five-1.svg'
import triangle from '../../img/triangle-graphic-five-1.svg'



const GraphicFiveDesktop = ({animate}) => {

  return (
    <div className="graphic-five-container-d gf-desktop">
      <div className="graphic-five-d">
        <img src={triangle} alt="" className={`gfi-triangle-d ${animate ? "gfi-res-animation" : ""}`}/>
        <img src={circle}   alt="" className={`gfi-circle-d ${animate ? "gfi-res-animation" : ""}`}/>
        <img src={diamond}  alt="" className={`gfi-diamond-d ${animate ? "gfi-res-animation" : ""}`}/>
        <p className={`font-resources-gf gf-text-1-d ${animate ? "gfi-text-animation" : ""}`}>Technical Insights</p>
        <p className={`font-resources-gf gf-text-2-d ${animate ? "gfi-text-animation" : ""}`}>Stability</p>
        <p className={`font-resources-gf gf-text-3-d ${animate ? "gfi-text-animation" : ""}`}>Strategic Foresight</p>
      </div>
    </div>
  )
}

export default GraphicFiveDesktop