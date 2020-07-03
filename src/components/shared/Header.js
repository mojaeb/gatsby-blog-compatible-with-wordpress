import React, { useEffect, useState } from "react"
import {Button, Col, Row, Container} from 'react-bootstrap'
import Styles from './Header.module.css';
import magnifyIcon from './../../../static/icons/magnify.icon.svg'
import {Link, useStaticQuery} from "gatsby"

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const data = useStaticQuery(graphql`
      query SiteHeaderQuery {
          site {
              siteMetadata {
                  title
                  backendServer
              }
          }
          allWordpressCategory {
              edges {
                  node {
                      id
                      name
                      slug
                      description
                  }
              }
          }
      }
  `)

  useEffect(() => {
    if (data && searchText.length > 1) {
      setLoading(true)
      fetch(`${data.site.siteMetadata.backendServer}wp-json/wp/v2/posts?search=${searchText}`)
        .then(res => res.json())
        .then(res => {
          setLoading(false)
          console.log(res)
          setResult([...res])
        })
        .catch(err => console.log(err))
    }
  }, [searchText])
    return (
        <div className={Styles.container}>
            <div className={Styles.main}>
              <div className={Styles.rightContainer}>
                <Link to={'/'} className={Styles.logoContainer}>
                  <img src="/images/logo.svg" className={Styles.logo}/>
                </Link>
                <div className={Styles.menu}>
                  <Link to="/all-posts/1">posts</Link>
                  <a href="#">
                    categories
                    <Menu preSlug={'/all-posts'} nextSlug={'/1'} items={data.allWordpressCategory.edges.map(item => item.node)}/>
                  </a>
                  <a href="#">
                    about us
                  </a>
                  <a href="">contact</a>
                </div>
              </div>
              <div className={Styles.searchBox}>
                {loading ? <span className={Styles.rightPart}><span className={Styles.spinner} /></span>: <span className={Styles.rightPart}><img src={magnifyIcon} alt=""/></span>}
                <input
                  type="text"
                  value={searchText}
                  onChange={e => setSearchText(e.currentTarget.value)}
                  placeholder={'search your text'}
                  onFocus={() => setShowResult(true)}
                  onBlur={() => setTimeout(() => {setShowResult(false)}, 100)}
                />
                {searchText.length > 1 && showResult ?(
                  result.length ? (
                    <div className={Styles.result}>
                      {result.map((item, index) => (
                      <Link to={`/${item.slug}`} key={index} className={Styles.resultItem}>
                        {item.title.rendered}
                      </Link>
                      ))}
                    </div>
                  ): (
                    <div className={Styles.result}>
                      <div className={Styles.resultItem} style={{padding: 10, color: '#888'}}>
                        not found
                      </div>
                    </div>
                  )
                ) :null}
              </div>
            </div>
        </div>
    )
}

const Menu = ({items, width, preSlug, nextSlug}) => {
  return (
    <div className={Styles.resultMenu} style={{width}}>
      {items.map((item, index) => (
        <Link to={`${preSlug}/${item.slug}${nextSlug}`} style={{margin: 0}} key={index} className={Styles.resultItem}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}
Menu.defaultProps = {
  width: 220,
  preSlug: null
}


export default Header;