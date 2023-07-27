import React from 'react'
import style from './form.module.css'

const Form = () => {
  return (
   <>
   <form action="" className={style.form}>

    <img src="https://flodesk.com/icons/logo.png" alt=""  width={200} className={style.logo}/>

    <h3>Welcome Back!</h3>

    <input className={style["input-field"]} type="email" placeholder='Enter Your Email' name='email' />
    <input className={style["input-field"]} type="password" placeholder='Enter Your Password' name="password"/>

    <button className={style.btn}>Login to Flodesk</button>
    <p className={style.para}>Not a member? <span className={style["text-underline"]}>Sign up</span></p>
    <span className={style["text-underline"]}>Forgot your password?</span>
    <p className={style.terms}>By Continuing You are agrreing to Flodesk's <span className={style["text-underline"]}>terms </span>and acknowledge you've read our <span className={style["text-underline"]}>privacy policy</span></p>

   </form>
   
   </>
  )
}

export default Form