import React from 'react'
import {graphql} from "gatsby"
import Header from "../components/shared/Header"
import Container from "../components/shared/Container"
import PostHeader from "../components/PostHeader"
import MainText from "../components/shared/MainText"
import Footer from "../components/shared/Footer"

export default function PostPage ({data}) {
  return (
    <React.Fragment>
      <Header/>
      <Container background={false}>
        <PostHeader
          image={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
          title={data.wordpressPost.title}
          content={data.wordpressPost.content}
          category={data.wordpressPost.categories}
        />
        <MainText/>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}
PostPage.defaultProps = {
  background: false
}


export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            categories {
                id
                name
            }
            date(fromNow: true)
            featured_media {
                localFile {
                    childImageSharp {
                        fluid(traceSVG: { threshold: 10 }) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            author {
                avatar_urls {
                    wordpress_96
                }
                name
            }
        }
        placeholderImage: file(relativePath: { eq: "replace-image.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`