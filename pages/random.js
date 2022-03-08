import { useState } from 'react'
import styles from '../styles/Random.module.css'

export default function Home() {
  const [ number=0 , setNum ] = useState()

  const generate = () => {
    const rand = Math.floor(Math.random() * 1000 + 1);
    setNum(rand)
    console.log(rand)
  }

  return (
    <>
    {/* Counter App */}
    <div className={styles.container}>
      <div className={styles.counterdiv}>
        <h1>Random Number Generator</h1>
        <span className={styles.countnumber}>{number}</span>
        <hr />
        <div className={styles.buttons}>
          <button className={styles.resetgenerate} onClick={generate}>
            Generate Number
          </button>
          <button onClick={()=> {setNum(0)}}>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}
