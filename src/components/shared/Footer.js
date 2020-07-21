import React from 'react';
import Styles from './Footer.module.css'
import telegramLogo from './../../../static/icons/telegram.logo.svg'
import { StaticQuery, graphql } from "gatsby"
import {Link} from "gatsby"


function FooterComponent({posts, categories}) {
  return (
    <div className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.item}>
          <b>Last Posts</b>
          {posts.map((post, index) => (
            <div key={index} className={Styles.postItem}>
              <p>{post.node.title}</p>
              <div>
                <i className={'dripicons-clock'}/>
                <span>{post.node.date}</span>
                {post.node.categories ? (
                  <Link to={`all-posts/${post.node.categories[0].slug}/1`}>{post.node.categories[0].name}</Link>
                ):null}
              </div>
            </div>
          ))}
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>Menu</b>
          <Link to={`all-posts/1`} href="#">posts</Link>
          <a href="#">about us</a>
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>categories</b>
          {categories.map((item, index) => (
            <Link to={`all-posts/${item.node.slug}/1`}>{item.node.name}</Link>
          ))}

        </div>
        <div className={`${Styles.about} ${Styles.item}`}>
          <b>about Devtops</b>
          <p>this is about paragraph for devtops team and i hope see in above the developing placement i hope see in above the developing placement</p>
          <a href="https://t.me/devtops" target={"_blank"}>
            <img src={telegramLogo} alt="telegram: @devtops"/>
            join channel
          </a>
        </div>
      </div>
    </div>
  )
}
export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
          query FooterQuery {
          
            allWordpressCategory(limit: 5, sort: {fields: id}) {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          
            allWordpressPost(limit: 2) {
              edges {
                node {
                  id
                  title
                  categories {
                    id
                    name
                    slug
                  }
                  date(fromNow: true)
                }
              }
            }
          } 
      `}
      render={data => (
        <header>
          <FooterComponent
            posts={data.allWordpressPost.edges}
            categories={data.allWordpressCategory.edges}

          />
        </header>
      )}
    />
  )
}