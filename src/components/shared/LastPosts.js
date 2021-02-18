import React from "react"
import Styles from "./LastPosts.module.css"
import { Link } from "gatsby"
import Img from "gatsby-image"

//TODO delete this section and get data from graphql and wordPress




const LastPosts = ({last, placeholderImage}) => {
  const first = last.edges[0].node
  const second = last.edges[1] && last.edges[1].node
  const third = last.edges[2] && last.edges[2].node

  const image1 = first.featured_media.localFile.childImageSharp.fluid
  const image2 = second && second.featured_media.localFile.childImageSharp.fluid
  const image3 = third && third.featured_media.localFile.childImageSharp.fluid
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.right}>
          <Post
            title={first.title}
            excerpt={first.excerpt}
            image={image1}
            slug={first.slug}
            row={false}
            style={{margin: '0 20px'}}
          />
        </div>
        <div className={Styles.left}>
          {second ? (
            <Post
              title={second.title}
              excerpt={second.excerpt}
              slug={second.slug}
              image={image2}
              row={true}
              style={{margin: '0 20px'}}
            />
          ): null}
          
          {third ? (
            <React.Fragment>
              <div style={{paddingTop: 50}}/>
              <Post
                title={third.title}
                excerpt={third.excerpt}
                slug={third.slug}
                row={true}
                image={image3}
                style={{margin: '0 20px'}}
              />
            </React.Fragment>
          ): null}
        </div>
      </div>
      <div className={Styles.moreContainer}>
        <Link className={Styles.moreLink} to="/all-posts/1">
          <span>بیشتر</span>
          <i className={'dripicons-arrow-thin-left'}/>
        </Link>
      </div>
    </div>
  )
}

export const Post = ({title, excerpt, row, style, col, height, image, slug}) => {
  const TITLE_LENGTH = row ? 50 : col !== 2 ? 50 : 100;
  const DESCRIPTION_LENGTH = row ? 100 : col !== 2 ? 100 : 270;

  const remarkTags = /(<p>|<\/p>)/g
  const description = excerpt.replace(remarkTags, '')
  return (
    <Link
      to={`/${decodeURIComponent(slug)}/`}
      className={[Styles.post, row ? Styles.row_post : Styles.column_post].join(' ')}
      style={{...style, height}}
    >
      <Img fluid={image} style={{flex: 1, flexBasis: 200}} fadeIn={true} draggable={false}/>
      {/*<div className={[Styles.post_pic].join(' ')}>*/}
      {/*  <Img fluid={image} />*/}
      {/*</div>*/}
      <div className={Styles.post_content}>
        <p style={{fontSize: 25, fontWeight: 700}}>{title.length > TITLE_LENGTH ? `${title.substring(0, TITLE_LENGTH)}...` : title}</p>
        <p style={{fontSize: 17, }}>
          {description.length > DESCRIPTION_LENGTH ? `${description.replace(/<a.*/, "").replace(/&hellip;/g, "").substring(0, DESCRIPTION_LENGTH)}...` : description.replace(/<a.*/, "").replace(/&hellip;/g, "")}
        </p>

        <div className={Styles.post_content_learnMore}>
          <span>خواندن</span>
          <span style={{height: '70%'}} className={'dripicons-arrow-thin-left'}/>
        </div>
      </div>
    </Link>
  )
}

Post.defaultProps = {
  title: '',
  description: '',
  row: false,
  col: 2,
  height: null,
}


export default LastPosts