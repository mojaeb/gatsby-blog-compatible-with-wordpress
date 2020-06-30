import React from 'react';
import Styles from './LastPosts.module.css'
import {Link} from 'gatsby'
import Img from 'gatsby-image';

//TODO delete this section and get data from graphql and wordPress


const imageRecognition = (image, placeholderImage) => {
  return image
}



const LastPosts = ({last, placeholderImage}) => {
  const first = last.edges[0].node
  const second = last.edges[1].node
  const third = last.edges[2].node
  const placeholderImageFluid = placeholderImage.childImageSharp.fluid;
  const image1 = imageRecognition(first.featured_media.localFile.childImageSharp.fluid, placeholderImageFluid)
  const image2 = imageRecognition(second.featured_media.localFile.childImageSharp.fluid, placeholderImageFluid)
  const image3 = imageRecognition(third.featured_media.localFile.childImageSharp.fluid, placeholderImageFluid)
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.right}>
          <Post
            title={first.title}
            excerpt={first.excerpt}
            image={image1}
            row={false}
            style={{margin: '0 20px'}}
          />
        </div>
        <div className={Styles.left}>
          <Post
            title={second.title}
            excerpt={second.excerpt}
            image={image2}
            row={true}
            style={{margin: '0 20px'}}
          />
          <div style={{paddingTop: 50}}/>
          <Post
            title={third.title}
            excerpt={third.excerpt}
            row={true}
            image={image3}
            style={{margin: '0 20px'}}
          />
        </div>
      </div>
      <div className={Styles.moreContainer}>
        <Link className={Styles.moreLink} to="/total-posts-page">
          <span>more posts</span>
          <i className={'dripicons-arrow-thin-left'}/>
        </Link>
      </div>
    </div>
  )
}

export const Post = ({title, excerpt, row, style, col, height, image}) => {
  const TITLE_LENGTH = row ? 50 : col !== 2 ? 50 : 100;
  const DESCRIPTION_LENGTH = row ? 100 : col !== 2 ? 100 : 270;

  const remarkTags = /(<p>|<\/p>)/g
  const description = excerpt.replace(remarkTags, '')
  return (
    <Link
      to={'/post-page/'}
      className={[Styles.post, row ? Styles.row_post : Styles.column_post].join(' ')}
      style={{...style, height}}
    >
      <Img fluid={image} style={{flex: 1, flexBasis: 200}} fadeIn={true} draggable={false}/>
      {/*<div className={[Styles.post_pic].join(' ')}>*/}
      {/*  <Img fluid={image} />*/}
      {/*</div>*/}
      <div className={Styles.post_content}>
        <p style={{fontSize: 25, fontWeight: 700}}>{title.length > TITLE_LENGTH ? `${title.substring(0, TITLE_LENGTH)}...` : title}</p>
        <p style={{fontSize: 17, }}>{description.length > DESCRIPTION_LENGTH ? `${description.substring(0, DESCRIPTION_LENGTH)}...` : description}</p>
        <div className={Styles.post_content_learnMore}><span>learn more</span><span className={'dripicons-arrow-thin-left'}/></div>
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