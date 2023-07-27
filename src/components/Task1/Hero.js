import React from "react"
import styles from './hero.module.css'

 const Hero=()=>{
    return (
        <>
        <div className={styles.container} >
            <div className={styles.content}>
            <h1 className={styles.heading}>Business Development</h1>
            <p className={styles.para}>Have an Idea or inquery for Waze business development?</p>
            <button className={styles.btn}>Share your Ideas</button>
            </div>
        </div>
        </>
    )
}

export default Hero ;