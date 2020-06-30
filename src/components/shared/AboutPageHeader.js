import React from 'react';
import Styles from './AboutPageHeader.module.css'


export default function AboutPageHeader() {
  return (
    <div className={Styles.container}>
      <div className={Styles.sheet}>
        <p className={Styles.sheet_title}>All posts</p>
        <p>total posts is <span>20</span></p>
      </div>
    </div>
  )
}