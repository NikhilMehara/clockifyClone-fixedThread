import React from 'react'
import SignNavbar from '../Components/ArfCompo/SignNavbar'
import Signupcard from '../Components/ArfCompo/Signupcard'
import SignWrite from '../Components/ArfCompo/SignWrite'
import styles from './signup.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
      <SignNavbar/>
      <SignWrite/>
      <Signupcard/>
    </div>
  )
}

export default Signup
