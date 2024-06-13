import React from "react"
import Icon from "../utils/Icon"
import "../assets/styles/header.css"

const Header = () => {
  return (
    <header>
      <div>
        <Icon icon="logo" />
      </div>
      <div className="header-center">
        <div>
          <Icon icon="home" />
          <span>Overview</span>
        </div>
        <div className="header-center-selected">
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
      <div className="header-right">
        <Icon icon="jose" />
        <div className="header-right-right">
          <div className="header-right-info">
            <p className="name">Dr.Jose Simmons</p>
            <p className="title">General Practitioner</p>
          </div>
          <Icon icon="settings" />
          <Icon icon="more" />
        </div>
      </div>
    </header>
  )
}

export default Header
