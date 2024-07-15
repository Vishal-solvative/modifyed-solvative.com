import {useEffect, useState} from 'react'
import BackToTop from '../elements/BackToTop'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import {client} from '../../tina/__generated__/client'

const Layout = ({children, headerStyle, isFooterVisible = true, isHeaderVisible = true, data = []}) => {
    const [openClass, setOpenClass] = useState('')
    const [footerData, setFooterData] = useState(null)
    const [headerData, setHeaderData] = useState(null)

    useEffect(() => {
        const loadFooterData = async () => {
            try {
                const response = await client.queries.global({
                    relativePath: 'global.mdx'
                })
                setFooterData(response)
                setHeaderData(response)
            } catch (e) {
                console.error('Error while fetching the footer content.', e)
            }
        }
        loadFooterData()
    }, [])
    const handleOpen = () => {
        if (document.body.classList.contains('mobile-menu-active')) {
            document.body.classList.remove('mobile-menu-active')
            setOpenClass('')
        } else {
            document.body.classList.add('mobile-menu-active')
            setOpenClass('sidebar-visible')
        }
    }

    const handleRemove = () => {
        if (openClass === 'sidebar-visible') {
            setOpenClass('')
            document.body.classList.remove('mobile-menu-active')
        }
    }
    return (
        <>
            <div className={openClass && 'body-overlay-1'} onClick={handleRemove} />

            {isHeaderVisible && headerData && (
                <>
                    <Header handleOpen={handleOpen} headerStyle={headerStyle} headerData={headerData} />
                    <Sidebar openClass={openClass} headerData={headerData} />
                </>
            )}

            <main className='main'>{children}</main>

            {isFooterVisible && footerData && <Footer {...footerData} />}

            <BackToTop />
        </>
    )
}

export default Layout
