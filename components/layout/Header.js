/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {fetchPages} from '../../util/pagesData'
import {useTina} from 'tinacms/dist/react'
import {tinaField} from 'tinacms/dist/react'
const Header = ({handleOpen, headerStyle, headerData}) => {
    const [scroll, setScroll] = useState(0)
    const {data} = useTina(headerData)
    const {global} = data
    const {header} = global

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className='container'>
                    <div className='main-header'>
                        <div className='header-left'>
                            <div className='header-logo'>
                                <Link href='/' legacyBehavior>
                                    <a className='d-flex'>
                                        <img
                                            alt='Agon'
                                            src={header?.logo}
                                            data-tina-field={tinaField(header, 'logo')}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className='header-nav'>
                                <nav className='nav-main-menu d-none d-xl-block'>
                                    <ul className='main-menu'>
                                        {header?.navLinks?.map((navLink, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={navLink?.link}
                                                    legacyBehavior
                                                    data-tina-field={tinaField(navLink, 'link')}
                                                >
                                                    {navLink?.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className='burger-icon burger-icon-white' onClick={handleOpen}>
                                    <span className='burger-icon-top' />
                                    <span className='burger-icon-mid' />
                                    <span className='burger-icon-bottom' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
