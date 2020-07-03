import React from 'react';
import Styles from './MainText.module.css'
export default function MainText(props) {
  return (
    <div  className={Styles.container}>
      <div className={Styles.author}>
        <div className={Styles.box}>
          <p>Written by</p>
          <b>mohamadjafar ebrahimi</b>
          <img src={props.avatar} alt=""/>
        </div>
      </div>
      <div className={Styles.text}>
        <main>
          <div className={Styles.main} dangerouslySetInnerHTML={{ __html: props.content }} />
        </main>
        <Author avatar={props.avatar} name={'mohamadjafar ebrahimi'}/>
      </div>
      <div className={Styles.other}/>
   </div>
  )
}

const Author = ({name, avatar}) => (
  <div className={Styles.bottom_author}>
    <div className={Styles.bottom_author_pic}>
      <img src={avatar} alt={name}/>
    </div>
    <div className={Styles.bottom_author_text}>
      <small>Written by</small>
      <b>{name}</b>
      <p>Indicant pueri, in quibus ut in speculis natura cernitur. Cum praesertim illa perdiscere ludus esset. Materiam vero rerum et copiam apud hos exilem, apud ill</p>
    </div>
  </div>
)















