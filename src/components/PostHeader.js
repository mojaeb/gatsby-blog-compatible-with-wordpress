import React from "react";
import Styles from './PosrHeader.module.css';
import Img from 'gatsby-image';

const PostHeader = ({image, title, content, category}) => {
  const COMMENTS = 3;
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <Img fluid={image}/>
      </div>
      <div className={Styles.content}>
        {category ? <a href="#">{category[0].name}</a> : null}
        <h1>{title}</h1>
        <div className={Styles.about_content}>
          <a href="#comments"> {COMMENTS} comment{COMMENTS > 1 ? 's' : null} </a>
          <p> - 2 months ago</p>
          <p> - 3 min read</p>
        </div>
      </div>
    </div>
  )
}
export default PostHeader