import React from 'react';
import Styles from './MainText.module.css'
export default function MainText(props) {
  return (
    <div  className={Styles.container}>
      <div className={Styles.author}>
        <div className={Styles.box}>
          <p>نوشته شده توسط</p>
          <b>{props.author.name}</b>
          <img src={props.avatar} alt=""/>
        </div>
      </div>
      <div className={Styles.text}>
        <main>
          <div className={Styles.main} dangerouslySetInnerHTML={{ __html: props.content }} />
        </main>
        <Author avatar={props.avatar} description={props.author.description} name={props.author.name}/>
      </div>
      <div className={Styles.other}/>
   </div>
  )
}

const Author = ({name, avatar, description}) => (
  <div className={Styles.bottom_author}>
    <div className={Styles.bottom_author_pic}>
      <img src={avatar} alt={name}/>
    </div>
    <div className={Styles.bottom_author_text}>
      <small>نوشته شده توسط</small>
      <b>{name}</b>
      <p>{description}</p>
    </div>
  </div>
)















