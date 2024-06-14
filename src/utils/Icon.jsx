import React from 'react'
import logo from "../assets/icons/logo.svg"
import home from "../assets/icons/home.svg"
import patient from "../assets/icons/patient.svg"
import calendar from "../assets/icons/calendar.svg"
import message from "../assets/icons/message.svg"
import transaction from "../assets/icons/transaction.svg"
import jose from "../assets/icons/joseSimmons.png"
import settings from "../assets/icons/settings.svg"
import more from "../assets/icons/more.svg"
import search from "../assets/icons/search.svg"
import morehoriz from "../assets/icons/morehoriz.svg"
import femaleIcon from "../assets/icons/femaleIcon.svg"
import phoneIcon from "../assets/icons/phoneIcon.svg"
import birthIcon from "../assets/icons/birthIcon.svg"
import insuranceIcon from "../assets/icons/insuranceIcon.svg"

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