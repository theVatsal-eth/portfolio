import React from 'react'
import Nav from './nav'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <nav className={styles.footer}>
        <img src='Vatsal.jpg'  />
        <div className={styles.rightNav}>
            <Link href='https://twitter.com/theVatsal_eth'><a target="_blank" rel="noreferrer">Twitter</a></Link>
            <Link href='https://github.com/theVatsal-eth'><a target="_blank" rel="noreferrer">Github</a></Link>
        </div>
    </nav>
  )
}
