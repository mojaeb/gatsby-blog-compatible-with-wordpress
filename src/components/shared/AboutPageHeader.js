import React from 'react';
import Styles from './AboutPageHeader.module.css'


export default function AboutPageHeader({total, name}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.sheet}>
        <p className={Styles.sheet_title}>{name} posts</p>
        <p>total posts is <span>{total}</span></p>
      </div>
    </div>
  )
}