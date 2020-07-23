import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from 'react-multistep'

import StepOne from '../about/StepOne'
import StepTwo from '../about/StepTwo'
import StepThree from '../about/StepThree'
import StepFour from '../about/StepFour'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }

]

const About = () => (
  <div className='container'>
    <MultiStep steps={steps} />
    <div className='container app-footer'>
      <h6>Press 'Enter' or click on progress bar for next step.</h6>
    </div>
  </div>
)

export default About