import React from 'react';
import Styles from './Footer.module.css'
import telegramLogo from './../../../static/icons/telegram.logo.svg'
import { StaticQuery, graphql } from "gatsby"



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
                <a href="#">{post.node.categories ?post.node.categories[0].name : ''}</a>
              </div>
            </div>
          ))}
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>Menu</b>
          <a href="#">posts</a>
          <a href="#">categories</a>
          <a href="#">about us</a>
          <a href="#">contact</a>
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>categories</b>
          {categories.map((item, index) => (
            <a href="#">{item.node.name}</a>
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