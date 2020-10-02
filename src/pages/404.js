import React from "react"
import Styles from './404.module.css'

const NotFoundPage = () => (
  <div className={Styles.main}>
    <p className={Styles.titleParagraph}>DEVTOPS</p>
    <p style={{padding: 10, backgroundColor: 'rgb(51 233 197 / 32%)'}}>not found 404</p>
  </div>
)

export default NotFoundPage
