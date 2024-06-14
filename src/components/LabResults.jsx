import React from 'react'
import Icon from '../utils/Icon'
import "../assets/styles/labResults.css"

const LabResults = ({ labResults}) => {
  const labResultElements = labResults.map(r => (
    <div key={r} className='lab-result-inner-record'>
      <p>{r}</p>
      <Icon icon="download" />
    </div>
  ))
  return (
    <div className='lab-results-container'>
      <h2>Lab Results</h2>
      <div className='lab-result-inner'>
        {labResultElements}
      </div>
    </div>
  )
}

export default LabResults