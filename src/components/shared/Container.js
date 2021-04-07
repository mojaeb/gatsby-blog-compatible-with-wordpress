import React from "react"
import Styles from "./Container.module.css"

const Container = ({children, background}) => {
  return (
    <div
      className={
        [
          Styles.main,
          background ? Styles.background: null,
        ].join(' ')
      }
    >
      {children}
    </div>
  )
}

export default Container