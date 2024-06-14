import React from 'react'
import Icon from '../utils/Icon'
import "../assets/styles/diagnosisHistory.css"

const DiagnosisHistory = () => {
  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>
      {/* {need to import the plot} */}
      <div className='diagnosis-results'>
        <div className='respiratory-rate-result'>
          <Icon icon="respiratoryRate" />
          <p className='result-title'>Respiratory Rate</p>
          <h3>20 bpm</h3>
          <p>Normal</p>
        </div>
        <div className='temperature-result'>
          <Icon icon="temperature" />
          <p className='result-title'>Temperature</p>
          <h3>98.6°F</h3>
          <p>Normal</p>
        </div>
        <div className='heart-rate-result'>
          <Icon icon="heartBPM" />
          <p className='result-title'>Heart Rate</p>
          <h3>78 bpm</h3>
          <p><span><Icon icon="arrowDown"/></span>Lower than Average</p>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory