



import React, { useState } from "react"
import Header from "../components/shared/Header"
import PostsContainer from "../components/shared/PostsContainer"
import Styles from './../pages/total-posts-page.module.css'
import AboutPageHeader from "../components/shared/AboutPageHeader"
import Footer from "../components/shared/Footer"
import { graphql } from "gatsby"
import Pagination from "../components/shared/Pagination"


export default function PostsPage(props) {
  console.log(props, props.pathContext.total)
  const {data} = props
  return (
    <div className={Styles.container}>
      <Header/>
      <AboutPageHeader name={data.wordpressCategory.name} total={props.pathContext.total}/>
      <PostsContainer posts={data.allWordpressPost.edges} />
      <Pagination
        currentPage={props.pathContext.page}
        totalPage={Math.ceil(props.pathContext.total/props.pathContext.limit)}
        uri={'all-posts/' + props.data.wordpressCategory.slug }
      />

      <Footer/>
    </div>
  )
}
//
//
export const query = graphql`
    query AllPostsWithCategory ($limit: Int, $skip: Int, $id: String) {

        allWordpressPost(limit: $limit, skip: $skip, filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug
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
        wordpressCategory(id: {eq: $id}) {
            id
            slug
            name
        }
    }

`