import React from 'react'
import Header from "./Header"
import Styles from './Layout.module.css'



export default function Layout({hasBackdrop, children}) {
  if (hasBackdrop) {
    return (
      <div className={Styles.container}>
        <Header/>
        {children}
      </div>
    )
  }
  return (
    <React.Fragment>
      <Header/>
      {children}
    </React.Fragment>
  )
}


