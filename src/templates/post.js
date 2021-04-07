import React from "react"
import { graphql } from "gatsby"
import Container from "../components/shared/Container"
import PostHeader from "../components/PostHeader"
import MainText from "../components/shared/MainText"
import Footer from "../components/shared/Footer"
import Layout from "../components/shared/Layout"


export default function PostPage({ data , ...props}) {
  return (
    <Layout hasBackdrop={false}>
      <Container background={false}>
        <PostHeader
          image={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
          title={data.wordpressPost.title}
          content={data.wordpressPost.content}
          category={data.wordpressPost.categories}
          post={data.wordpressPost}
        />
        <MainText
          content={data.wordpressPost.content}
          avatar={data.wordpressPost.author.avatar_urls.wordpress_96}
          author={data.wordpressPost.author}
        />
      </Container>
      <Footer/>
    </Layout>
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
                slug
            }
            author {
                name
                avatar_urls {
                    wordpress_96
                }
            }
            date(formatString: "YYYY-MM-DD")
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
                description
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