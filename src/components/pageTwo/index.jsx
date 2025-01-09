import React from 'react'
import './pageTwo.css'
import GraphicFiveMobile from '../graphicFiveMobile'
import GraphicFiveDesktop from '../graphicFiveDesktop'
function PageTwo({isActive}) {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Your Swiss Partner in Stability and Growth</p>
        <p className='paragraph-page'>Founded on Swiss finance values, Futura Capital AG is dedicated to client success and market stability. Our expert team combines technical insights with a flexible approach, building trust through transparent communication and shared goals.</p>
        <GraphicFiveMobile animate={isActive}/>
        <GraphicFiveDesktop animate={isActive}/>
        <p className='paragraph-page'>Our mission is to turn uncertainty into opportunity with Swiss precision and strategic foresight, guiding clients toward long-term stability.</p>
    </div>
  )
}

export default PageTwo