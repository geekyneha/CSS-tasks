import React from 'react'
import style from './features.module.css'
import {BiLock} from  'react-icons/bi'

const Features = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style["image-container"]}>
        <img src="https://petapixel.com/assets/uploads/2022/09/how-to-set-timer-on-iphone-camera-featured-800x420.jpg" width={660} alt="google photos" className={style.image} />
        </div>

        <div className={style.content}>
            <h3 className={style.subHeading}><span><BiLock size={35} className={style.lock}/></span>subscribe to any plan</h3>
            <h2 className={style.heading} >Get more features in Google Photos</h2>
            <p className={style.para}>Bring your favorite moments to life with more Google Photos editing tools for Android and iOS, including Magic Eraser. Subject to eligibility.</p>
            <button className={style.btn}>View details</button>

        </div>



    </div>
    
    </>
  )
}

export default Features