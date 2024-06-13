import React from 'react'
import Icon from '../utils/Icon'
import "../assets/styles/patientDetail.css"

const PatientDetail = ({patientDetails}) => {
  console.log(patientDetails)
  const { name, profile_picture, date_of_birth, gender, phone_number, emergency_contact, insurance_type} = patientDetails[0]
  console.log(name)
  return (
    <div className='patient-details-tile'>
      <img  className="patient-picture" src={profile_picture} />
      <h2>{name}</h2>
      <div>
        <div className="patient-detail-inner">
          <Icon icon="birthIcon"/>
          <div>
            <p>Date Of Birth</p>
            <p className='patient-detail-value'>{date_of_birth}</p>
          </div>
        </div>
        <div className="patient-detail-inner">
          <Icon icon="femaleIcon"/>
          <div>
            <p>Gender</p>
            <p className='patient-detail-value'>{gender}</p>
          </div>
        </div>
        <div className="patient-detail-inner">
          <Icon icon="phoneIcon"/>
          <div>
            <p>Contact Info</p>
            <p className='patient-detail-value'>{phone_number}</p>
          </div>
        </div>
        <div className="patient-detail-inner">
          <Icon icon="phoneIcon"/>
          <div>
            <p>Emergency Contacts</p>
            <p className='patient-detail-value'>{emergency_contact}</p>
          </div>
        </div>
        <div className="patient-detail-inner">
          <Icon icon="insuranceIcon"/>
          <div>
            <p>Insurance Provider</p>
            <p className='patient-detail-value'>{insurance_type}</p>
          </div>
        </div>
      </div>
      <button className='more-info'>Show All Information</button>
    </div>
  )
}

export default PatientDetail