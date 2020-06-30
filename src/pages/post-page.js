import React from 'react'
import Header from '../components/shared/Header'
import Container from "../components/shared/Container"
import PostHeader from "../components/PostHeader"
import MainText from "../components/shared/MainText"
import Footer from "../components/shared/Footer"



export default function PostPage () {
  return (
    <React.Fragment>
      <Header/>
      <Container background={false}>
        <PostHeader/>
        <MainText/>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}
PostPage.defaultProps = {
  background: false
}