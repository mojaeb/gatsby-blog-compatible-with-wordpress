import React from 'react';
import Styles from './Footer.module.css'
import telegramLogo from './../../../static/icons/telegram.logo.svg'
import { StaticQuery, graphql } from "gatsby"
import {Link} from "gatsby"
import jMoment from 'moment-jalaali'


function FooterComponent({posts, categories}) {
  return (
    <div className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.item}>
          <b>آخرین مطالب</b>
          {posts.map((post, index) => (
            <div key={index} className={Styles.postItem}>
              <p>{post.node.title}</p>
              <div>
                <i className={'dripicons-clock'}/>
                <span>{jMoment(new Date(post.node.date)).format('jYYYY/jMM/jDD')}</span>
                {post.node.categories ? (
                  <Link to={`all-posts/${post.node.categories[0].slug}/1`}>{post.node.categories[0].name}</Link>
                ):null}
              </div>
            </div>
          ))}
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>منو</b>
          <Link to={`all-posts/1`} href="#">مطالب</Link>
          {/*<a href="#">درباره ما</a>*/}
        </div>
        <div className={`${Styles.menu} ${Styles.item}`}>
          <b>دسته بندی ها</b>
          {categories.map((item, index) => (
            <Link key={index} to={`all-posts/${item.node.slug}/1`}>{item.node.name}</Link>
          ))}

        </div>
        <div className={`${Styles.about} ${Styles.item}`}>
          <b>درباره دوتاپس</b>
          <p>دوتاپس با هدف پوشش مباحث و اخبار برنامه نویسی چند وقتیه شروع به فعالیت کرده و سعی میکنه هر روز با کیفیت تر و به روز تر مطالب رو به شما دوستان منتقل کنه</p>
          <a href="https://t.me/devtops" target={"_blank"}>
            <img src={telegramLogo} alt="telegram: @devtops"/>
            عضویت در کانال
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
                  date(formatString: "YYYY-MM-DD")
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