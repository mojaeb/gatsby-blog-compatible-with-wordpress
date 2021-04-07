import React from "react"
import { graphql } from "gatsby"
import MainSlider from "../components/shared/MainSlider"
import HomeCategories from "../components/shared/Categories"
import LastPosts from "../components/shared/LastPosts"
import Footer from "../components/shared/Footer"
import Layout from "../components/shared/Layout"

const IndexPage = ({ data }) => (
  <Layout hasBackdrop={true}>
    <MainSlider image={data.headerImage}/>
    <HomeCategories categories={data.allWordpressCategory}/>
    <LastPosts last={data.allWordpressPost} placeholderImage={data.placeholderImage}/>
    {/*<Authors data={data.allWordpressWpAuthors.edges}/>*/}
    <Footer/>
  </Layout>
)


export const indexQuery = graphql`
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

        placeholderImage: file(name: { eq: "pexels-photo-3761163" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        headerImage: file(name: { eq: "devtops-wide-image" }) {
            childImageSharp {
                fluid(quality: 60) {
                    ...GatsbyImageSharpFluid
                }
            }
        }




    }
`
export default IndexPage
