import React from 'react';
import {Button, Col, Row, Container} from 'react-bootstrap'
import Styles from './Header.module.css';
import magnifyIcon from './../../../static/icons/magnify.icon.svg'

const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.main}>
              <div className={Styles.rightContainer}>
                <div className={Styles.logoContainer}>
                  <img src="/images/logo.svg" className={Styles.logo}/>
                </div>
                <div className={Styles.menu}>
                  <a href="#">posts</a>
                  <a href="#">categories</a>
                  <a href="#">about us</a>
                  <a href="#">contact</a>
                </div>
              </div>
              <div className={Styles.searchBox}>
                <img src={magnifyIcon} alt=""/>
                <input type="text" placeholder={'search your text'}/>
              </div>
            </div>
        </div>
    )
}

export default Header;