import styles from './Illustration.module.css'

export const Illustration =()=>{
  return(

    <div className={styles.illustration}>
      <div className={styles['illustration-grid']}>

     
        <div className={styles['illustration-left']}>

        </div>
        <div className={styles['illustration-right']}>
          <h4>OUR FEATURE</h4>
          <h1>Receive payments quickly from anywhere</h1>
          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
          <a href="">Get Started</a>
        </div>

      </div>
      <div className={styles['illustration-string']}>
        <img src="./assets/string3.svg" alt="" />
      </div>
    </div>
  )
}