import React from 'react';
import {Button, Col, Row, Container} from 'react-bootstrap'
import HeaderStyle from './Header.module.css';

const Header = () => {
    return (
        <div className={HeaderStyle.container}>
            <div className={HeaderStyle.logoContainer}>
                <img src="/images/logo.svg" className={HeaderStyle.logo}/>
            </div>
            <div>menu items</div>
        </div>
    )
}

export default Header;