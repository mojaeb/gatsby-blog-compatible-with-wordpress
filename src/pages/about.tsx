import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props: PageProps) => {
    return (
        <Layout>
            <SEO title="about page" />
            <p>this is sample page {props.path}</p>
        </Layout>
    )
}

export default AboutPage;