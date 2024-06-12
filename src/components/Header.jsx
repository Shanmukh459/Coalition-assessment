import React from 'react'
import Icon from '../utils/Icon'

const Header = () => {
  return (
    <header>
      <div>
        <Icon icon="logo" />
      </div>
      <div>
        <div>
        <Icon icon="home" />
          <span>Overview</span>
        </div>
        <div>
        <Icon icon="patient" />
          <span>Patients</span>
        </div>
        <div>
        <Icon icon="calendar" />
          <span>Schedule</span>
        </div>
        <div>
        <Icon icon="message" />
          <span>Message</span>
        </div>
        <div>
        <Icon icon="transaction" />
          <span>Transactions</span>
        </div>
      </div>
      <div>
      <Icon icon="jose" />
        <div>
          <p>Dr.Jose Simmons</p>
          <p>General Practitioner</p>
          <Icon icon="settings" />
          <Icon icon="more" />
        </div>
      </div>

    </header>
  )
}

export default Header