import React from 'react'
import Icon from '../utils/Icon'

const PatientsList = ({data}) => {
  const patientsListElements = data.map((d) => {
    return (
      <div>
        <img src={d.profile_picture} />
        <p>{d.name}<span>{d.gender}, {d.age}</span></p>
        <Icon icon="more_horiz" />
      </div>
    )
  })
  return (
    <div>
      <div>
        <h1>Patients</h1>
        <Icon icon="search" />
      </div>
      <div>
        {patientsListElements}
      </div>
    </div>
  )
}

export default PatientsList