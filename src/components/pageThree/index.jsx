import React from 'react'
import './pageThree.css'
import Core from '../core'
import res_1 from '../../img/resource1_page_3.svg'
import res_2 from '../../img/resource2_page_3.svg'
import res_3 from '../../img/resource3_page_3.svg'
import res_4 from '../../img/resource4_page_3.svg'
function PageThree() {
  return (
    <div className='page_container'>
        <p className='tittle-page'>Core Values</p>
        <div className='cores-container'>
          <Core image={res_1} tittle="Trust" description="Built on transparency and integrity, trust is our foundation in every client interaction."/>
          <Core image={res_2} tittle="Client-Centric Approach" description="Our clients’ goals drive every decision."/>
          <Core image={res_3} tittle="Innovation with Security" description="Adapting strategies while upholding strict compliance."/>
          <Core image={res_4} tittle="Integrity and Transparency" description="Honest communication and visible commitment fosters enduring partnerships."/>
        </div>
    </div>
  )
}

export default PageThree