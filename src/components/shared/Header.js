import React, { useEffect, useState } from "react"
import { Button, Col, Row, Container } from "react-bootstrap"
import Styles from "./Header.module.css"
import magnifyIcon from "./../../../static/icons/magnify.icon.svg"
import { Link, useStaticQuery } from "gatsby"
import json from "./../../../data"

const Header = () => {
  const [showResponsiveSearchBox, setResponsiveSearchBox] = useState(false)
  const [showDrawerMenu, setShowDrawerMenu] = useState(false)


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
  return (
    <div className={Styles.container}>
      <div className={Styles.main}>

        <div className={Styles.rightContainer}>
          <button className={Styles.iconButton} onClick={() => setShowDrawerMenu(true)}>
            <span className={"dripicons-menu"}/>
          </button>

          <Link to={"/"} className={Styles.logoContainer}>
            <img src="/images/devtops.svg" className={Styles.logo}/>
          </Link>

          <ResponsiveMenuWrapper
            visible={showDrawerMenu}
            className={Styles.menu}
            onBlur={() => setShowDrawerMenu(false)}
          >
            <Link to="/">خانه</Link>
            <Link to="/all-posts/1">مطالب</Link>
            <span>
	                  	دسته بندی
	                    <Menu isDrawer={showDrawerMenu} preSlug={"/all-posts"} nextSlug={"/1"}
                            items={data.allWordpressCategory.edges.map(item => item.node)}/>
	                  </span>
            {/*<a href="#">about us</a>*/}

          </ResponsiveMenuWrapper>

        </div>

        <SearchIconButton onShow={() => setResponsiveSearchBox(true)}/>
        <SearchBox/>
      </div>
      {showResponsiveSearchBox ? (
        <ResponsiveSearchContainer onClose={() => setResponsiveSearchBox(false)}/>
      ) : null}
    </div>
  )
}

const ResponsiveMenuWrapper = ({ children, visible, onBlur, className }) => {
  return (
    <React.Fragment>
      <div className={[Styles.rowMenu, className].join(" ")}>{children}</div>
      {visible ? (
        <div
          className={Styles.responsiveDrawer}
        >
          <div className={Styles.drawerSheet} onClick={onBlur}/>
          <div className={Styles.drawerContainer}>{children}</div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

const SearchIconButton = ({ onShow }) => {
  return (
    <button className={Styles.searchIconButton} onClick={onShow}>
      <img src={magnifyIcon} alt=""/>
    </button>
  )
}

const ResponsiveSearchContainer = ({ onClose }) => {
  return (
    <div className={Styles.responsiveSearchBox}>
      <div onClick={onClose} style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}/>
      <SearchBox isModal={true}/>
    </div>
  )
}


const Menu = ({ items, width, preSlug, nextSlug, isDrawer }) => {
  return (
    <div className={isDrawer ? null : Styles.resultMenu} style={{ width }}>
      {items.map((item, index) => (
        <Link to={`${preSlug}/${item.slug}${nextSlug}`} style={{ margin: 0 }} key={index} className={Styles.resultItem}>
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

const SearchBox = ({ isModal }) => {
  const [searchText, setSearchText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (searchText.length > 1) {
      const list = json.map(i => i.node)
      const result = list.filter(i => {
        const r = i.title.search(searchText)
        if (r > -1) {
          return i
        }
      })
      setResult([...result])
    }
  }, [searchText])

  return (
    <div className={[Styles.searchBox, isModal ? Styles.modalBox : Styles.normalBox].join(" ")}>
      {loading ? <span className={Styles.rightPart}><span className={Styles.spinner}/></span> :
        <span className={Styles.rightPart}><img src={magnifyIcon} alt=""/></span>}
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.currentTarget.value)}
        placeholder={"جستجو کنید"}
        onFocus={() => setShowResult(true)}
        onBlur={() => setTimeout(() => {
          setShowResult(false)
        }, 100)}
      />
      {searchText.length > 1 && showResult ? (
        result.length ? (
          <div className={Styles.result}>
            {result.map((item, index) => (
              <Link onClick={() => console.log("h")} to={`/${item.slug}`} key={index} className={Styles.resultItem}>
                {item.title}
              </Link>
            ))}
          </div>
        ) : (
          <div className={Styles.result}>
            <div className={Styles.resultItem} style={{ padding: 10, color: "#888" }}>
              پیدا نشد
            </div>
          </div>
        )
      ) : null}
    </div>
  )
}

export default Header