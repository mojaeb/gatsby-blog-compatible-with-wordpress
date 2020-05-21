import React from "react"
import { Link } from "gatsby"
import Header from '../components/shared/Header'
import MainSlider from '../components/shared/MainSlider'
import HomeCategories from "../components/shared/Categories"
const IndexPage = () => (
  <div>
    <Header/>
    <MainSlider/>
    <HomeCategories/>
  </div>
)

export default IndexPage
