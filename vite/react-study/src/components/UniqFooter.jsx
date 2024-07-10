import React from 'react';
import style from './UniqFooter.module.css'

function UniqFooter(props) {
    const inlineStyle = {
        color:'blue',
        fontSize:'30px',
        backgroundColor:'yellow'
    }
    return (
        <footer className={style.footer__block}>
            Test
            <button style={inlineStyle}>
                Test inline style
            </button>
        </footer>
    );
}

export default UniqFooter;