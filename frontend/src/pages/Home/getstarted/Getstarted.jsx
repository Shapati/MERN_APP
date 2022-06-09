import styles from './Getstarted.module.css'

export const Getstarted =()=>{
  return(
    <div className={styles.getstarted}>
      <div className={styles['getstarted-left']}>
      
          <h4>OUR FEATURE</h4>
          <h1>Receive payments quickly from anywhere</h1>
          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
         
        
      </div>
      <form className={styles['getstarted-right']} action="">
          <h3>Get Started for Free</h3>
          <input type="email" placeholder='Email Address' />
          <input type="Password" placeholder='Password' />
          <button>GET STARTED</button>
      </form>
    </div>
  )
}