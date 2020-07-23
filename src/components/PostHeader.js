import React from "react";
import Styles from './PosrHeader.module.css';
import Img from 'gatsby-image';
import {Link} from "gatsby"

const PostHeader = ({image, title, content, category, post}) => {
  const COMMENTS = 3;
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <Img fluid={image}/>
      </div>
      <div className={Styles.content}>
        {category ? (
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {category.map((item, index) => (
              <Link to={`all-posts/${item.slug}/1`} className={Styles.categoryItem}>{item.name}</Link>
            ))}
          </div>
        ) : null}
        <h1>{title}</h1>
        <div className={Styles.about_content}>
          {/*<a href="#comments"> {COMMENTS} comment{COMMENTS > 1 ? 's' : null} </a>*/}
          <p>{post.date}</p>
          <p> - 3 min read</p>
        </div>
      </div>
    </div>
  )
}
export default PostHeader