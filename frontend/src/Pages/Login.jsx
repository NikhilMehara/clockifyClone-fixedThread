import React from 'react'
import LoginCard from '../Components/ArfCompo/LoginCard'
import LoginNav from '../Components/ArfCompo/LoginNav'
import LoginRight from '../Components/ArfCompo/LoginRight'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.log}>
        <LoginNav/>
        <LoginCard/>
      </div>
      <div className={styles.imag}>
        <LoginRight/>
      </div>
    </div>
  )
}

export default Login