import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'
export default function Nav() {
  return (
    <nav className={styles.nav}>
        <Link href='/'><img src='Vatsal.jpg' /></Link>
        <div className={styles.rightNav}>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    </nav>
  )
}
