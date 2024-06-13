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
import morehoriz from "../assets/morehoriz.svg"
import femaleIcon from "../assets/femaleIcon.svg"
import phoneIcon from "../assets/phoneIcon.svg"
import birthIcon from "../assets/birthIcon.svg"
import insuranceIcon from "../assets/insuranceIcon.svg"

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
  morehoriz,
  femaleIcon,
  birthIcon,
  phoneIcon,
  insuranceIcon,
}

const Icon = ({ icon }) => {
  return (
    <img src={icons[icon]} />
  )
}

export default Icon