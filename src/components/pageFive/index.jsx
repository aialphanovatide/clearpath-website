import React from 'react'
import './pageFive.css'
import Core from '../core'
import res_1 from '../../img/resource1_page_5.gif'
import res_2 from '../../img/resource2_page_5.gif'
function PageFive() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Unique Selling Points</p>
        <div className='selling-container'>
          <Core image={res_1} tittle="Swiss Expertise in Market Complexity" description="Futura Capital AG combines regulatory safeguards with strategic insights. We are navigators, guiding clients through global volatile markets securely." extraStyle="-dif2"/>
          <Core image={res_2} tittle="Dual Advantage: Security & Agility" description="Our Swiss-regulated foundation provides unparalleled security, paired with adaptable strategies ensuring flexibility for fast-moving markets." extraStyle="-dif2"/>
        </div>
    </div>
  )
}

export default PageFive