import React from 'react';
import '../../App.css';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt="logo" src={'https://cryptologos.cc/logos/uniswap-uni-logo.png'}/>
        </header>
    );
}

export default Header;