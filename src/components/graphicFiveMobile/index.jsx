import React from 'react'
import './graphicFiveMobile.css'
import circle from '../../img/circle-graphic-five-1.svg'
import diamond from '../../img/diamond-graphic-five-1.svg'
import triangle from '../../img/triangle-graphic-five-1.svg'

const GraphicFiveMobile = ({animate}) => {
    
  return (
    <div className="graphic-five-container-m gf-mobile">
      <div className="graphic-five-m">
        <img src={triangle} alt="" className={`gfi-triangle ${animate ? "gfi-res-animation" : ""}`}/>
        <img src={circle}   alt="" className={`gfi-circle ${animate ? "gfi-res-animation" : ""}`}/>
        <img src={diamond}  alt="" className={`gfi-diamond ${animate ? "gfi-res-animation" : ""}`}/>
        <p className={`font-resources-gf gf-text-1 ${animate ? "gfi-text-animation" : ""}`}>Technical Insights</p>
        <p className={`font-resources-gf gf-text-2 ${animate ? "gfi-text-animation" : ""}`}>Stability</p>
        <p className={`font-resources-gf gf-text-3 ${animate ? "gfi-text-animation" : ""}`}>Strategic Foresight</p>
      </div>
    </div>
  )
}

export default GraphicFiveMobile