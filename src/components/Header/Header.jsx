import React, { useState } from 'react'
import './Header.css'
import Bars from '../../assets/bars.png'
import logo from '../../logos/goku.jpeg'
import { Link } from 'react-scroll'
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    //window inner width sirf starting me check hori hai
    const [menuOpened, setMenuOpened] = useState(false)


    return (
        <div className="header">
            <img src={logo} alt="" className='logo' />
            {(mobile === true) ?
                (menuOpened === false) ? (
                    <div
                        style={{
                            backgroundColor: 'var(--appColor)',
                            padding: "0.5rem",
                            borderRadius: "5px",
                            position: 'fixed',
                            right: '2rem',
                            zIndex: '99',
                        }}
                        onClick={() => setMenuOpened(true)}
                    >
                        <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                    </div>
                ) : (
                    <div
                        style={{
                            backgroundColor: 'var(--appColor)',
                            padding: "0.5rem",
                            borderRadius: "5px",
                            position: 'fixed',
                            right: '0.5rem',
                            zIndex: '99',
                        }}>
                        <span

                            onClick={() => setMenuOpened(false)}
                        >
                            <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem', position: 'absolute', right: '0.5rem' }} />
                        </span>
                        <ul className='header-menu'
                        style={{
                            flexDirection: 'column',
                            backgroundColor : 'var(--appColor)',
                            padding : '2rem'
                        }}>
                            <li><Link
                                onClick={() => setMenuOpened(false)}
                                to='home'
                                span={true}
                                smooth={true}>Home</Link>
                            </li>
                            <li><Link
                                onClick={() => setMenuOpened(false)}
                                to='programs'
                                span={true}
                                smooth={true}>Programs</Link>
                            </li>
                            <li><Link
                                onClick={() => setMenuOpened(false)}
                                to='reasons'
                                span={true}
                                smooth={true}>Reasons</Link>
                            </li>
                            <li><Link
                                onClick={() => setMenuOpened(false)}
                                to='plans'
                                span={true}
                                smooth={true}>Plans</Link>
                            </li>
                            <li><Link
                                onClick={() => setMenuOpened(false)}
                                to='Testimonials'
                                span={true}
                                smooth={true}>Testimonials</Link>
                            </li>
                        </ul>
                    </div>
                )
                : (
                    <ul className='header-menu'>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='home'
                            span={true}
                            smooth={true}>Home</Link>
                        </li>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='programs'
                            span={true}
                            smooth={true}>Programs</Link>
                        </li>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='reasons'
                            span={true}
                            smooth={true}>Reasons</Link>
                        </li>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='plans'
                            span={true}
                            smooth={true}>Plans</Link>
                        </li>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='Testimonials'
                            span={true}
                            smooth={true}>Testimonials</Link>
                        </li>
                    </ul>)}

        </div>
    )
}

export default Header
