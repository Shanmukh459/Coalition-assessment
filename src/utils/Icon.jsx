import React from 'react'
import logo from "../assets/logo.svg"
import home from "../assets/home.svg"
import patient from "../assets/patient.svg"
import calendar from "../assets/calendar.svg"
import message from "../assets/message.svg"
import transaction from "../assets/transaction.svg"
import jose from "../assets/joseSimmons.png"
import settings from "../assets/settings.svg"
import more from "../assets/more.svg"
import search from "../assets/search.svg"
import more_horiz from "../assets/more_horiz.svg"

const icons = {
  logo,
  home,
  patient,
  calendar,
  message,
  transaction,
  jose,
  settings,
  more,
  search,
  more_horiz
}

const Icon = ({ icon }) => {
  return (
    <img src={icons[icon]} />
  )
}

export default Icon