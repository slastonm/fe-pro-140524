import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    let links = [
        {
            value:'Features',
            link:'test-link'
        },
        {
            value:'Enterprise',
            link:'test-link2'
        },
        {
            value:'Support',
            link:'test-link3'
        },
        {
            value:'Pricing',
            link:'test-link4'
        }
    ];
    let linksEl = links.map((item, index)=>{
        return <a key={index} href={item.link}>{item.value}</a>
    })
    const callAlert = ()=>{
        alert('Hello');
    }
    const eventInfo = (e)=>{
        e.preventDefault();
        console.log(e);
    }
    return (
        <header>
            Header block
            <nav>
                <Link to='/' className='d-inline-block pe-3'>
                    Home
                </Link>
                <Link to='/about' className='d-inline-block pe-3'>
                    About
                </Link>
                <Link to="/tel" className='d-inline-block pe-3'>
                    Contact
                </Link>

                {/* {linksEl}
                <button onClick={callAlert}>
                    Click
                </button>
                <button onClick={(e)=>{
                    eventInfo(e)
                }}>
                    Click event
                </button> */}
            </nav>
        </header>
    );
}

export default Header;