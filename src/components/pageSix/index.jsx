import React from 'react'
import './pageSix.css'
import res_desk from '../../img/resource_desktop_6.svg'
import res_mobile from '../../img/resource_mobile_6.svg'
function PageSix() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Why Choose Capital Futura AG?</p>
        <div className='choose-container'>
          <img src={res_desk} alt="" className='img-page-six desktop'/>
          <img src={res_mobile} alt="" className='img-page-six mobile'/>
          
        </div>
    </div>
  )
}

export default PageSix