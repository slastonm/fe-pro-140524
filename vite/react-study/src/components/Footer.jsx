import React from 'react';

function Footer(props) {
    const nowDate = new Date().getFullYear();
    const siteInfo = `Site work from 2017 to ${nowDate}`
    return (
        <footer className='footer__block'>
            Footer hello how are you
            <p>
                {siteInfo}
            </p>
        </footer>
    );
}

export default Footer;