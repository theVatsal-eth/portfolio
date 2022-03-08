import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.projects}>
      <Link href='/random'><a className={styles.projectlinks}>Counter</a></Link>
      <Link href='/pal'><a className={styles.projectlinks}>Palindrome</a></Link>

    </div>
  )
}
