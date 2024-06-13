import React from 'react'
import Icon from '../utils/Icon'
import "../assets/styles/patientList.css"

const PatientsList = ({data}) => {
  const patientsListElements = data.map((d) => {
    return (
      <div className='patient-tile'>
        <div className='patient-icon-details'>
          <img className="person-icon" src={d.profile_picture} />
          <div>
            <p className='name'>{d.name}</p>
            <p className='gender'>{d.gender}, {d.age}</p>
          </div>
        </div>
        <Icon icon="morehoriz" />
      </div>
    )
  })
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