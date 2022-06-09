import styles from  './Feature.module.css'

export const Feature = ()=>{
  return(
    <div>
      <div className={styles.feature}>
        <div className={styles['feature-grid']}>
          <div className={styles['feature-left']}>
         
            <h4>OUR FEATURE</h4>
            <h1>All payments are linked to your Fiancy account</h1>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            <a href="">Get Started</a>
        
          </div>
          <div className={styles['feature-right']}>

          </div>
        </div>
      </div>
    </div>
  )
}
