import styles from './Intro.module.css'
import { Fade, Zoom } from 'react-reveal';
export const Intro = () =>{
  return(
    <div className={styles.intro}>

    
    <div className={styles.introSection}>
      <div className={styles['introSection-left']}>
       
      <Fade  bottom delay={500}> <h1>Managing buisness payments has never been easier</h1></Fade>
       <Fade bottom delay={1000}> <p className={styles.introP}>
        End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
        </p></Fade>
        <Fade bottom delay={1500}>
        <div className={styles.introButtons}>
          <a href="">Get Started</a>
          <div className={styles['play-button']}>
            <div className={styles['play-cover']}>
              <img src="./assets/play.svg" alt="" />
            </div>
            <p>See How It Works</p>
          </div>
        </div>
        </Fade>

      </div>
    <Fade right delay={2000}>

    
      <div className={styles['introSection-right']}>
      <img src="./assets/intro3.png" className={styles.image1} alt="" />
        <img src="./assets/received.svg"className={styles.image2} alt="" />
        <img src="./assets/chart.svg"className={styles.image3} alt="" />
        <img src="./assets/black.svg" className={styles.image4}alt="" />
      </div>

      </Fade>

    </div>

    <div className={styles.string}>
      <img src="./assets/string1.svg" alt="" className={styles.deco1} />
      <img src="./assets/string2.svg" alt="" className={styles.deco2} />
    </div>

    </div>
  )
}