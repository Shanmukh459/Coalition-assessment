import React from 'react'
import Icon from '../utils/Icon'
import "../assets/styles/patientList.css"
import { getPatientListElements } from '../utils/getPatientListElements'

const PatientsList = ({data}) => {

  const patientsListElements = getPatientListElements(data)
  
  return (
    <div className='patients-list-container' id="patients">
      <div className='patients-list-title'>
        <h2>Patients</h2>
        <Icon icon="search" />
      </div>
      <div className='patients-details'>
        {patientsListElements}
      </div>
    </div>
  )
}

export default PatientsList