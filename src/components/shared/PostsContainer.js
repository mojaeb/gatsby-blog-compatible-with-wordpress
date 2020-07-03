import React from 'react';
import Styles from './PostsContainer.module.css'
import { Post } from "./LastPosts"


export default function PostsContainer({posts}) {
  return (
    <div className={Styles.main}>
      {posts.map((post, index) => (
        <Post
          key={index}
          height={440}
          title={post.node.title}
          excerpt={post.node.excerpt}
          image={post.node.featured_media.localFile.childImageSharp.fluid}
          slug={post.node.slug}
          row={false}
          col={3}
        />
      ))}

    </div>
  )

}