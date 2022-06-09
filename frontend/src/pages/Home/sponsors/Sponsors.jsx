import styles from './Sponsors.module.css'

export const Sponsors = () =>{
  return(
    <div className={styles.sponsor}>
      <h3>Over 32k+ software businesses growing with AR Shakir</h3>
  
        <div className={styles['sponsor-img']}>
          <img src="./assets/openZeppelin.svg" alt="" />
          <img src="./assets/oracle.svg" alt="" />
          <img src="./assets/morpheus.svg" alt="" />
          <img src="./assets/samsung.svg" alt="" />
          <img src="./assets/monday.svg" alt="" />
          <img src="./assets/segment.svg" alt="" />
        </div>

    </div>
  )
}