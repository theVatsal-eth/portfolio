import React from 'react'
import Nav from './nav'
import styles from '../../styles/Home.module.css'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
  )
}
