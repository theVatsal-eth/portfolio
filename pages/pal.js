import React from 'react'
import { useState } from 'react'
import styles from '../styles/Pal.module.css'

export default function Palindrome() {
  const [ Pal , setPal ] = useState('Enter a String')
  const [ Val, setVal ] = useState('')

  // console.log(Pal)
  const checker = (e) => {
    if (Val != '') {
      console.log(Val)
      const valflip = Val.toLowerCase().split('').reverse().join('')
      console.log(valflip)

      if (Val.toLowerCase() == valflip) {
        setPal(`${Val.toUpperCase()} is a palindrome!`)
      } else {
        setPal(`${Val.toUpperCase()} is not a palindrome!`)
      }
    } else {
      setPal('Enter a String!')
    } 
  }

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.pal}>
        <input 
        type="text" 
        onInput={ (e) => {
            setVal(e.target.value)
          }} 
        className={styles.input} 
        placeholder="Enter a word..." />
        <button className={styles.btn} onClick={(e) => checker(e)}>Check</button>
        </div>
        <p className={styles.result}>{Pal}</p>
      </div>
    </section>
  )
}
