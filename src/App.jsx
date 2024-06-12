import React from 'react'
import logo from "./assets/logo.svg"
import home from "./assets/home.svg"
import patient from "./assets/patient.svg"
import calendar from "./assets/calendar.svg"
import message from "./assets/message.svg"
import transaction from "./assets/transaction.svg"
import jose from "./assets/joseSimmons.png"
import settings from "./assets/settings.svg"
import more from "./assets/more.svg"
const App = () => {
  return (
    <header>
      <div>
        <img src={ logo }/>
      </div>
      <div>
        <div>
          <img src={ home }/>
          <span>Overview</span>
        </div>
        <div>
          <img src={ patient }/>
          <span>Patients</span>
        </div>
        <div>
          <img src={ calendar } />
          <span>Schedule</span>
        </div>
        <div>
          <img src={ message } />
          <span>Message</span>
        </div>
        <div>
          <img src={ transaction } />
          <span>Transactions</span>
        </div>
      </div>
      <div>
        <img src={jose} />
        <div>
          <p>Dr.Jose Simmons</p>
          <p>General Practitioner</p>
          <img src={settings} />
          <img src={more} />
        </div>
      </div>

    </header>
  )
}

export default App