import React from 'react'
import "../assets/styles/diagnosticList.css"

const DiagnosticList = ({ diagnosisRecords }) => {
  const diagnosisRecordElements = diagnosisRecords.map((d, i) => {
    return (
      <tr key={i}>
        <td>{d.name}</td>
        <td>{d.description}</td>
        <td>{d.status}</td>
      </tr>
    )
})

  return (
    <div className='diagnostic-list'>
      <h2>Diagnostic List</h2>
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosisRecordElements} 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DiagnosticList