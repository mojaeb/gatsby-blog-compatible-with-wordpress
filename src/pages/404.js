import React from "react"
import Styles from "./404.module.css"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <div className={Styles.main}>
    <Link to={"/"} className={Styles.titleParagraph}>DEVTOPS</Link>
    <p className={Styles.box}>پیدا نشد 404</p>
  </div>
)

export default NotFoundPage
