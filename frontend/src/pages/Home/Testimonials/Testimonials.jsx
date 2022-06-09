import styles from  './Testimonials.module.css'

export const Testimonials =()=> {
  return (
    <div className={styles.Testimonials}>
        <h3>TESTIMONIAL</h3>
        <h1>Check what our <br /> clients are saying</h1>
      <div className={styles['Testimonial-grid']}>
      
        
        <div className={styles['Testimonials-left']}>
        
          
        </div>
        <div className={styles['Testimonials-right']}>
          <img src="./assets/quote.svg" alt="" />
          <h2>Save Time Managing Social <br /> Media For Your Buisness</h2>
          <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
          <br />
          <br />
          Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
          <img src="./assets/stars.svg" alt="" />
          <h5>Anjela Taylor</h5>
          <p>CEO SAMSUNG</p>
        </div>
        
      </div>
    </div>
  )
}
