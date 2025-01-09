import React from 'react'
import './graphicOne.css'
import res1 from '../../img/res-graphic-one-1.svg'
import res2 from '../../img/res-graphic-one-2.svg'
import res3 from '../../img/res-graphic-one-3.svg'

const GraphicOne = ({animate}) => {

  return (
    <div className='go-container'>
        <div className='go-animation'>
            <span className={`go-circle-1 ${animate ? 'go-animate' : ''}`}>
            <div className={`internal-circle-go ${animate ? 'go-animate' : ''}`}>
                <img src={res1} alt="" />
                <p className='font-resources' >Market<br/>Analysis</p>
                </div>
            </span>
            <span className={`go-circle-2 ${animate ? 'go-animate' : ''}`}>
            <div className={`internal-circle-go ${animate ? 'go-animate' : ''}`}>
                <img src={res2} alt="" />
                <p className='font-resources' >Stability-Focused<br/>Trading</p>
                </div>
            </span>
            <span className={`go-circle-3 ${animate ? 'go-animate' : ''}`}>
                <div className={`internal-circle-go ${animate ? 'go-animate' : ''}`}>
                    <img src={res3} alt="" />
                    <p className='font-resources' >Global Reach,<br/>Local Expertise</p>
                </div>
                
            </span>
        </div>

    </div>
  )
}

export default GraphicOne