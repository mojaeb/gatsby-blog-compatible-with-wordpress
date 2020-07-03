import React from "react"
import { graphql, Link } from "gatsby"
import Header from '../components/shared/Header'
import MainSlider from '../components/shared/MainSlider'
import HomeCategories from "../components/shared/Categories"
import Styles from "./index.module.css";
import LastPosts from "../components/shared/LastPosts"
import Authors from "../components/shared/Authors"
import Footer from "../components/shared/Footer"
const IndexPage = ({data}) => (
  <div className={Styles.main}>
    <Header image={data.headerImage}/>
    <MainSlider image={data.headerImage}/>
    <HomeCategories categories={data.allWordpressCategory}/>
    <LastPosts last={data.allWordpressPost} placeholderImage={data.placeholderImage}/>
    <Authors data={data.allWordpressWpAuthors.edges}/>
    <Footer/>
  </div>
)



export const indexQuery  = graphql`
    query MyQuery {
      allWordpressCategory(limit: 4) {
        edges {
          node {
            id
            name
            slug
            description
          }
        }
      }
      allWordpressPost(limit: 3) {
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
      
      placeholderImage: file(relativePath: { eq: "pexels-photo-3761163.jpeg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        headerImage: file(relativePath: { eq: "engineering.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        
        allWordpressWpAuthors {
            edges {
                node {
                    id
                    title
                    content
                    featured_media {
                        localFile {
                            childImageSharp {
                                fluid{
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                        author {
                            name
                            slug
                            avatar_urls {
                                wordpress_48
                            }
                        }
                    }
                }
            }
        }
      
    }
`
export default IndexPage
