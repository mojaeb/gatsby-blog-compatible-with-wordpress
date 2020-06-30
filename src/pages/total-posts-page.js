import React, { useState } from "react"
import Header from "../components/shared/Header"
import PostsContainer from "../components/shared/PostsContainer"
import Styles from './total-posts-page.module.css'
import AboutPageHeader from "../components/shared/AboutPageHeader"
import Footer from "../components/shared/Footer"
import { graphql } from "gatsby"
import Pagination from "../components/shared/Pagination"


export default function PostsPage({data}) {
  return (
    <div className={Styles.container}>
      <Header/>
      <AboutPageHeader/>
      <PostsContainer posts={data.allWordpressPost.edges} />
      <Pagination/>
      <Footer/>
    </div>
  )
}


export const query = graphql`
  query TotalPosts {
  
  allWordpressPost(limit: 9) {
        edges {
          node {
            id
            title
            excerpt
            
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            
          }
        }
      }
  }

`